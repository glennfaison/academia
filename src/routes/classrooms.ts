import { Router } from 'express';
import { Classroom } from '../models/Classroom';

export const classrooms = Router();

/* Create one. */
classrooms.route('/')
  .post(async (req, res) => {
    try {
      let result = await Classroom.create(req.body);
      return res.status(201).json(result);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

/* Fetch many. */
classrooms.route('/')
  .get(async (req, res) => {
    try {
      const result = await Classroom.findAll({ where: req.query });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  });

/* Fetch by id */
classrooms.route('/:id')
  .get(async (req, res) => {
    try {
      const result = await Classroom.findByPk(req.params.id, { include: [{ all: true }] });
      return res.status(201).json(result);
    } catch (err) {
      return res.status(404).json(err);
    }
  });

/* Update by id */
classrooms.route('/:id')
  .put(async (req, res) => {
    try {
      const { id, ...data } = req.body;
      let result = await Classroom.update(data, { where: { id: req.params.id } });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  });

/* Update many */
classrooms.route('/')
  .put(async (req, res) => {
    try {
      let result = await Classroom.update(req.body, { where: req.params });
      return res.status(200).json(result);
    } catch (err) {
      return res.status(422).json(err);
    }
  });

/* Delete by id */
classrooms.route('/:id')
  .delete(async (req: any, res) => {
    try {
      const result = await Classroom.destroy({ where: { id: req.params.id } });
      if (result !== 0) { return res.status(204).json('OK'); }
    } catch (err) {
      return res.status(422).json(err);
    }
  });
