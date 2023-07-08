import { Request, Response } from 'express';
import BrandProfile from '../Models/Brand/BrandProfile';

const getAll = async (_req: Request, res: Response) => {
  const brandProfile = await BrandProfile.find();
  return res.status(200).json(brandProfile);
};

const create = async (req: Request, res: Response) => {
  const brandProfile = await BrandProfile.create(req.body);
  return res.status(201).json(brandProfile);
};

export default { getAll, create };