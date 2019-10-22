import { Router } from 'express';
import { CourseController } from '../controllers/course.controller';

const controller = new CourseController();
export const courses = Router();

/* Create one. */
courses.route('/')
  .post((req, res) => controller.createOne(req, res));

/* Fetch many. */
courses.route('/')
  .get((req, res) => controller.fetchMany(req, res));

/* Fetch by id */
courses.route('/:id')
  .get((req, res) => controller.fetchById(req, res));

/* Update by id */
courses.route('/:id')
  .put((req, res) => controller.updateById(req, res));

/* Update many */
courses.route('/')
  .put((req, res) => controller.updateMany(req, res));

/* Delete by id */
courses.route('/:id')
  .delete((req, res) => controller.deleteById(req, res));
