import { Router } from 'express';
import { Instructor } from '../models/Instructor';

export const instructors = Router();

/* Create one. */
instructors.route('/')
  .post(async (req, res) => {
    try {
      let result = await Instructor.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

/* Fetch many. */
instructors.route('/')
  .get(async (req, res) => {
    try {
      const result = await Instructor.findAll({ where: req.query });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

/* Fetch by id */
instructors.route('/:id')
  .get(async (req, res) => {
    try {
      const result = await Instructor.findByPk(req.params.id, { include: [{ all: true }] });
      return res.status(201).json(result);
    } catch (err) {
      return res.status(404).json(err);
    }
  });

/* Update by id */
instructors.route('/:id')
  .put(async (req, res) => {
    try {
      const { id, ...data } = req.body;
      let result = await Instructor.update(data, { where: { id: req.params.id } });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  });

/* Update many */
instructors.route('/')
  .put(async (req, res) => {
    try {
      let result = await Instructor.update(req.body, { where: req.params });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  });

/* Delete by id */
instructors.route('/:id')
  .delete(async (req: any, res) => {
    try {
      const result = await Instructor.destroy({ where: { id: req.params.id } });
      if (result !== 0) { return res.status(204).json('OK'); }
    } catch (err) {
      return res.status(422).json(err);
    }
  });
