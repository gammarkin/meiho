import { Request, Response } from 'express';
import HeroBanner from '../Models/MJML/02.HeroBanner';

const getHeroBanner = async (_req: Request, res: Response) => {
  const herroBanner = await HeroBanner.find();
  return res.status(200).json(herroBanner);
};

const postHeroBanner = async (req: Request, res: Response) => {
  const heroBanner = await HeroBanner.create(req.body);
  return res.status(201).json(heroBanner);
};

export default { postHeroBanner, getHeroBanner };