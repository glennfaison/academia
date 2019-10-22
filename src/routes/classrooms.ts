import { Router } from 'express';
import { ClassroomController } from '../controllers/classroom.controller';

const controller = new ClassroomController();
export const classrooms = Router();

/* Create one. */
classrooms.route('/')
  .post((req, res) => controller.createOne(req, res));

/* Fetch many. */
classrooms.route('/')
  .get((req, res) => controller.fetchMany(req, res));

/* Fetch by id */
classrooms.route('/:id')
  .get((req, res) => controller.fetchById(req, res));

/* Update by id */
classrooms.route('/:id')
  .put((req, res) => controller.updateById(req, res));

/* Update many */
classrooms.route('/')
  .put((req, res) => controller.updateMany(req, res));

/* Delete by id */
classrooms.route('/:id')
  .delete((req, res) => controller.deleteById(req, res));
