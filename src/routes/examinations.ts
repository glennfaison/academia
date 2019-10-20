import { Router } from 'express';
import { Examination } from '../models/Examination';

export const examinations = Router();

/* Create one. */
examinations.route('/')
  .post(async (req, res) => {
    try {
      let result = await Examination.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

/* Fetch many. */
examinations.route('/')
  .get(async (req, res) => {
    try {
      const result = await Examination.findAll({ where: req.query });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

/* Fetch by id */
examinations.route('/:id')
  .get(async (req, res) => {
    try {
      const result = await Examination.findByPk(req.params.id, { include: [{ all: true }] });
      return res.status(201).json(result);
    } catch (err) {
      return res.status(404).json(err);
    }
  });

/* Update by id */
examinations.route('/:id')
  .put(async (req, res) => {
    try {
      const { id, ...data } = req.body;
      let result = await Examination.update(data, { where: { id: req.params.id } });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  });

/* Update many */
examinations.route('/')
  .put(async (req, res) => {
    try {
      let result = await Examination.update(req.body, { where: req.params });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  });

/* Delete by id */
examinations.route('/:id')
  .delete(async (req: any, res) => {
    try {
      const result = await Examination.destroy({ where: { id: req.params.id } });
      if (result !== 0) { return res.status(204).json('OK'); }
    } catch (err) {
      return res.status(422).json(err);
    }
  });
