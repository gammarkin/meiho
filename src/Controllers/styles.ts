import { Request, Response } from 'express';
import Styles from '../Models/Styles';

const getAll = async (_req: Request, res: Response) => {
  const styles = await Styles.find();
  return res.status(200).json(styles);
};

const create = async (req: Request, res: Response) => {
  const styles = await Styles.create(req.body);
  return res.status(201).json(styles);
};

export default { getAll, create };