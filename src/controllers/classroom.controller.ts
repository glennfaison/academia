import { CrudController } from './crud.controller';
import { Classroom } from '../models/Classroom';

export class ClassroomController extends CrudController {

  constructor() {
    super(Classroom);
  }

}
