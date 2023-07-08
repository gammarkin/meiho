import { Request, Response } from 'express';
import Footer from '../Models/MJML/06.Footer';

const getAll = async (_req: Request, res: Response) => {
  const footer = await Footer.find();
  return res.status(200).json(footer);
};

const create = async (req: Request, res: Response) => {
  const footer = await Footer.create(req.body);
  return res.status(201).json(footer);
};

export default { getAll, create };