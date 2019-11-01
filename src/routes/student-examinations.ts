import { Router } from 'express';
import { StudentExaminationController } from '../controllers/student-examination.controller';

const controller = new StudentExaminationController()
export const studentExaminations = Router();

/* Create one. */
studentExaminations.route('/')
  .post((req, res) => controller.createOne(req, res));

/* Fetch many. */
studentExaminations.route('/')
  .get((req, res) => controller.fetchMany(req, res));

/* Fetch by id */
studentExaminations.route('/:id')
  .get((req, res) => controller.fetchById(req, res));

/* Update by id */
studentExaminations.route('/:id')
  .put(async (req, res) => {
    delete req.body.password;
    return await controller.updateById(req, res);
  });

/* Update many */
studentExaminations.route('/')
  .put(async (req, res) => {
    delete req.body.password;
    return await controller.updateMany(req, res);
  });

/* Delete by id */
studentExaminations.route('/:id')
  .delete((req, res) => controller.deleteById(req, res));
