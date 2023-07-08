import { Request, Response } from 'express';
import TextFolder from '../Models/MJML/03.TextFolder';

const getTextFolder = async (req: Request, res: Response) => {
  const textFolder = await TextFolder.find();
  return res.status(200).json(textFolder);
};

const postTextFolder = async (req: Request, res: Response) => {
  const textFolder = await TextFolder.create(req.body);
  return res.status(201).json(textFolder);
};

export default { getTextFolder, postTextFolder };