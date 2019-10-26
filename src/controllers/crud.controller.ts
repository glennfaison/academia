import { Request, Response } from 'express';
import { Model } from 'sequelize-typescript';
import { BuildOptions } from 'sequelize/types';

type ModelStatic = typeof Model & {
  new(values?: object, options?: BuildOptions): Model;
}


export abstract class CrudController {

  protected Model: ModelStatic;

  constructor(model: ModelStatic) {
    this.Model = model;
  }

  /* Create one. */
  async createOne(req: Request, res: Response) {
    try {
      let result = await this.Model.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  }

  /* Fetch many. */
  async fetchMany(req: Request, res: Response) {
    try {
      const result = await this.Model.findAll({ where: req.query, include: [{ all: true }] });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  /* Fetch by id */
  async fetchById(req: Request, res: Response) {
    try {
      const result = await this.Model.findByPk(req.params.id, { include: [{ all: true }] });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(404).json(err);
    }
  }

  /* Update by id */
  async updateById(req: Request, res: Response) {
    try {
      const { id, ...data } = req.body;
      let result = await this.Model.update(data, { where: { id: req.params.id } });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  }

  /* Update many */
  async updateMany(req: Request, res: Response) {
    try {
      let result = await this.Model.update(req.body, { where: req.params });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  }

  /* Delete by id */
  async deleteById(req: Request, res: Response) {
    try {
      const result = await this.Model.destroy({ where: { id: req.params.id } });
      if (result !== 0) { return res.sendStatus(204); }
    } catch (err) {
      return res.status(422).json(err);
    }
  }

}
