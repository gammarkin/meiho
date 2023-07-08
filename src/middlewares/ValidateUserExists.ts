import { Request, Response, NextFunction } from 'express';
import Login from '../Models/Login';

const validateUserExists = async (request: Request, response: Response, next: NextFunction) => {
  const { email = '', username = '' } = request.body;

  const userEmail = await Login.findOne({ email });
  const userName = await Login.findOne({ username });

  if (userEmail || userName) { 
    return response.status(400).json({ message: 'User already exists' }); 
  }

  next();
};

export default validateUserExists;
