import { Router } from 'express';
import { Student } from '../models/Student';

export const students = Router();

/* Create one. */
students.route('/')
  .post(async (req, res) => {
    try {
      let result = await Student.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

/* Fetch many. */
students.route('/')
  .get(async (req, res) => {
    try {
      const result = await Student.findAll({ where: req.query });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

/* Fetch by id */
students.route('/:id')
  .get(async (req, res) => {
    try {
      const result = await Student.findByPk(req.params.id, { include: [{ all: true }] });
      return res.status(201).json(result);
    } catch (err) {
      return res.status(404).json(err);
    }
  });

/* Update by id */
students.route('/:id')
  .put(async (req, res) => {
    try {
      const { id, ...data } = req.body;
      let result = await Student.update(data, { where: { id: req.params.id } });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  });

/* Update many */
students.route('/')
  .put(async (req, res) => {
    try {
      let result = await Student.update(req.body, { where: req.params });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  });

/* Delete by id */
students.route('/:id')
  .delete(async (req: any, res) => {
    try {
      const result = await Student.destroy({ where: { id: req.params.id } });
      if (result !== 0) { return res.status(204).json('OK'); }
    } catch (err) {
      return res.status(422).json(err);
    }
  });
