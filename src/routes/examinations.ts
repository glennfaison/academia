import { Router } from 'express';
import { ExaminationController } from '../controllers/examination.controller';

const controller = new ExaminationController();
export const examinations = Router();

/* Create one. */
examinations.route('/')
  .post((req, res) => controller.createOne(req, res));

/* Fetch many. */
examinations.route('/')
  .get((req, res) => controller.fetchMany(req, res));

/* Fetch by id */
examinations.route('/:id')
  .get((req, res) => controller.fetchById(req, res));

/* Update by id */
examinations.route('/:id')
  .put((req, res) => controller.updateById(req, res));

/* Update many */
examinations.route('/')
  .put((req, res) => controller.updateMany(req, res));

/* Delete by id */
examinations.route('/:id')
  .delete((req, res) => controller.deleteById(req, res));
