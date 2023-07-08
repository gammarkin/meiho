import { Request, Response } from 'express';
import klaviyo from '../Services/klaviyo';

const getAll = async (_req: Request, res: Response) => {
  const templates = await klaviyo.getKlaviyo();
  return res.status(200).json(templates);
};

const create = async (req: Request, res: Response) => {
  const template = await klaviyo.postKlaviyo();
  return res.status(201).json(template);
};

export default { getAll, create };