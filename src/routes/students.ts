import { Router } from 'express';
import { StudentController } from '../controllers/student.controller';

const controller = new StudentController()
export const students = Router();

/* Create one. */
students.route('/')
  .post((req, res) => controller.createOne(req, res));

/* Fetch many. */
students.route('/')
  .get((req, res) => controller.fetchMany(req, res));

/* Fetch by id */
students.route('/:id')
  .get((req, res) => controller.fetchById(req, res));

/* Update by id */
students.route('/:id')
  .put(async (req, res) => {
    delete req.body.password;
    return await controller.updateById(req, res);
  });

/* Update many */
students.route('/')
  .put(async (req, res) => {
    delete req.body.password;
    return await controller.updateMany(req, res);
  });

/* Delete by id */
students.route('/:id')
  .delete((req, res) => controller.deleteById(req, res));
