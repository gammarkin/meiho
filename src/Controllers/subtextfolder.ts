import { Request, Response } from 'express';
import SubTextFolder from '../Models/MJML/04.SubTextFolder';

const getAll = async (_req: Request, res: Response) => {
  const subtextfolder = await SubTextFolder.find();
  return res.status(200).json(subtextfolder);
};

const create = async (req: Request, res: Response) => {
  const subtextfolder = await SubTextFolder.create(req.body);
  return res.status(201).json(subtextfolder);
};

export default { getAll, create };