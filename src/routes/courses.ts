import { Router } from 'express';
import { Course } from '../models/Course';

export const courses = Router();

/* Create one. */
courses.route('/')
  .post(async (req, res) => {
    try {
      let result = await Course.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

/* Fetch many. */
courses.route('/')
  .get(async (req, res) => {
    try {
      const result = await Course.findAll({ where: req.query });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

/* Fetch by id */
courses.route('/:id')
  .get(async (req, res) => {
    try {
      const result = await Course.findByPk(req.params.id, { include: [{ all: true }] });
      return res.status(201).json(result);
    } catch (err) {
      return res.status(404).json(err);
    }
  });

/* Update by id */
courses.route('/:id')
  .put(async (req, res) => {
    try {
      const { id, ...data } = req.body;
      let result = await Course.update(data, { where: { id: req.params.id } });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  });

/* Update many */
courses.route('/')
  .put(async (req, res) => {
    try {
      let result = await Course.update(req.body, { where: req.params });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  });

/* Delete by id */
courses.route('/:id')
  .delete(async (req: any, res) => {
    try {
      const result = await Course.destroy({ where: { id: req.params.id } });
      if (result !== 0) { return res.status(204).json('OK'); }
    } catch (err) {
      return res.status(422).json(err);
    }
  });
