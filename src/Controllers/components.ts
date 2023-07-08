import { Request, Response } from 'express';
import Components from '../Models/Components';

const getAll = async (_req: Request, res: Response) => {
  const components = await Components.find();
  return res.status(200).json(components);
};

const create = async (req: Request, res: Response) => {
  const components = await Components.create(req.body);
  return res.status(201).json(components);
};

export default { getAll, create };