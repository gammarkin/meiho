import { Model } from 'mongoose';
import { Request, Response } from 'express';

class BasicCrud<T> {
  constructor(private _model: Model<T>) {}

  public async create(req: Request, res: Response) {
    const data = await this._model.create(req.body);
    return res.status(201).json(data);
  }

  public async readAll(_req: Request, res: Response) {
    const data = await this._model.find();
    return res.status(200).json(data);
  }

  public async readOne(req: Request, res: Response) {
    const data = await this._model.findById(req.params.id);
    return res.status(200).json(data);
  }

  public async update(req: Request, res: Response) {
    const data = await this._model.updateOne({ _id: req.params.id }, req.body);
    return res.status(200).json(data);
  }

  public async delete(req: Request, res: Response) {
    await this._model.deleteOne({ _id: req.params.id });
    return res.status(204).end();
  }
}

export default BasicCrud;
