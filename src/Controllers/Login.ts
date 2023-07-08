import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { comparePassword, hashPassword } from '../Services/bcrypt';
import Login from '../Models/Login';

const USER_NOT_FOUND = 'User not found';

const check = async (req: Request, res: Response) => {
  const { email = '', password = '' } = req.body;

  const login = await Login.find({ email });

  if (!login || login.length < 1) return res.status(404).json({ message: USER_NOT_FOUND });

  const passwordMatch = await comparePassword(password, login[0].hashed_password);

  if (!passwordMatch) return res.status(401).json({ message: 'Invalid password' });

  login[0].hashed_password = '';

  return res.status(200).json(login);
};

const create = async (req: Request, res: Response) => {
  const { username, email, password, role, history = [] } = req.body;
  
  const hash = await hashPassword(password);
  const login = await Login.create({ username, email, hashed_password: hash, role, history });

  return res.status(201).json(login);
};

const editHistory = async (req: Request, res: Response) => {
  const { id } = req.params;

  const user = await Login.findById(id);

  if (!user) {
    return res.status(404).json({ error: USER_NOT_FOUND });
  }

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send('No history with that id');
  }

  if (!user.history) user.history = [];

  user.history = [req.body, ...user.history];

  await user.save();

  return res.status(204).end();
};

const getAll = async (_req: Request, res: Response) => {
  const logins = await Login.find();

  return res.status(200).json(logins);
};

const editPassword = async (req: Request, res: Response) => { 
  const { id } = req.params;
  const { password } = req.body;

  const login = await Login.findById(id);

  if (!login) {
    return res.status(404).json({ error: USER_NOT_FOUND });
  }

  login.hashed_password = await hashPassword(password);

  await login.save();

  return res.status(204).end();
};

export default { check, create, editHistory, getAll, editPassword };
