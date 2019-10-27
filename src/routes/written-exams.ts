import { Router } from 'express';
import { WrittenExamController } from '../controllers/written-exam.controller';

const controller = new WrittenExamController();
export const writtenExams = Router();

/* Create one. */
writtenExams.route('/')
  .post((req, res) => controller.createOne(req, res));

/* Fetch many. */
writtenExams.route('/')
  .get((req, res) => controller.fetchMany(req, res));

/* Fetch by id */
writtenExams.route('/:id')
  .get((req, res) => controller.fetchById(req, res));

/* Update by id */
writtenExams.route('/:id')
  .put((req, res) => controller.updateById(req, res));

/* Update many */
writtenExams.route('/')
  .put((req, res) => controller.updateMany(req, res));

/* Delete by id */
writtenExams.route('/:id')
  .delete((req, res) => controller.deleteById(req, res));
