import { Request, Response } from 'express';
import Header from '../Models/MJML/01.Header';

const getHeaders = async (_req: Request, res: Response) => {
  const headers = await Header.find();
  return res.status(200).json(headers);
};

const postHeader = async (req: Request, res: Response) => {
  const header = await Header.create(req.body);
  return res.status(201).json(header);
};

export default { getHeaders, postHeader };
