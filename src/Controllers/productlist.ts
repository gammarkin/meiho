import { Request, Response } from 'express';
import ProductList from '../Models/Products/ProductList';

const getAll = async (_req: Request, res: Response) => {
  const productList = await ProductList.find();
  return res.status(200).json(productList);
};

const create = async (req: Request, res: Response) => {
  const productList = await ProductList.create(req.body);
  return res.status(201).json(productList);
};

const getByName = async (req: Request, res: Response) => {
  const { q: query } = req.query;
  const products = await ProductList.find({ profile: query });
  return res.status(200).json(products);
};

export default { getAll, create, getByName };