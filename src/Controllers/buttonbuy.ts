import { Request, Response } from 'express';
import ButtonBuy from '../Models/MJML/05.ButtonBuy';

const getAll = async (_req: Request, res: Response) => {
  const buttonbuy = await ButtonBuy.find();
  return res.status(200).json(buttonbuy);
};

const create = async (req: Request, res: Response) => {
  const buttonbuy = await ButtonBuy.create(req.body);
  return res.status(201).json(buttonbuy);
};

export default { getAll, create };