import { CrudController } from './crud.controller';
import { CourseInstructor } from '../models/CourseInstructor';

export class CourseInstructorController extends CrudController {

  constructor() {
    super(CourseInstructor);
  }

}
