import { Router } from 'express';
import { Gender } from '../models/Gender';

export const genders = Router();

/* Create one. */
genders.route('/')
  .post(async (req, res) => {
    try {
      let result = await Gender.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

/* Fetch many. */
genders.route('/')
  .get(async (req, res) => {
    try {
      const result = await Gender.findAll({ where: req.query });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

/* Fetch by id */
genders.route('/:id')
  .get(async (req, res) => {
    try {
      const result = await Gender.findByPk(req.params.id, { include: [{ all: true }] });
      return res.status(201).json(result);
    } catch (err) {
      return res.status(404).json(err);
    }
  });

/* Update by id */
genders.route('/:id')
  .put(async (req, res) => {
    try {
      const { id, ...data } = req.body;
      let result = await Gender.update(data, { where: { id: req.params.id } });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  });

/* Update many */
genders.route('/')
  .put(async (req, res) => {
    try {
      let result = await Gender.update(req.body, { where: req.params });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  });

/* Delete by id */
genders.route('/:id')
  .delete(async (req: any, res) => {
    try {
      const result = await Gender.destroy({ where: { id: req.params.id } });
      if (result !== 0) { return res.status(204).json('OK'); }
    } catch (err) {
      return res.status(422).json(err);
    }
  });
