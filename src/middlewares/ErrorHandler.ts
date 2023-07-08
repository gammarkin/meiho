import { Request, Response, NextFunction } from 'express';

const errorHandler = (
  error: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => res.status(500).json({ error });

export default errorHandler;
