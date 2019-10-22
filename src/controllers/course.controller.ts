import { CrudController } from './crud.controller';
import { Course } from '../models/Course';

export class CourseController extends CrudController {

  constructor() {
    super(Course);
  }

}
