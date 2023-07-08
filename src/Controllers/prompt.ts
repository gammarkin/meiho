/* eslint-disable max-len */
import mjml from 'mjml';
import { Request, Response } from 'express';
import BrandProfile from '../Models/Brand/BrandProfile';
import Styles from '../Models/Styles';
import { model, generateMJML, sendEmail, postKlaviyo } from '../Services';

const getter = async (req: Request, res:Response) => {
  const { message, style, client, rows, columns, selectedCategories, user } = req.body;
  const AI_RESPONSE = await model.call(message);

  const brandProfile = await BrandProfile.find({ profile: client });
  const { website } = brandProfile[0];
  const styles = await Styles.find();
  let selectedStyle;
  if (styles.filter((i) => i._id === client).length > 0) {
    selectedStyle = styles.filter((i) => i._id === client)[0].attributes;
  } else {
    selectedStyle = styles.filter((i) => i._id === style)[0].attributes;
  }

  const { html } = mjml(await generateMJML(
    AI_RESPONSE, 
    selectedStyle, 
    style, 
    website, 
    client, 
    rows,
    columns, 
    selectedCategories,
  ));

  await sendEmail(message, user.email);
  await postKlaviyo();
  return res.status(200).json({ ai_response: AI_RESPONSE, html });
};

const get = async (_req: Request, res:Response) => res.status(200).json({ ok: true });

export default { getter, get };
