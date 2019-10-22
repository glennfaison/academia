import { CrudController } from './crud.controller';
import { Examination } from '../models/Examination';

export class ExaminationController extends CrudController {

  constructor() {
    super(Examination);
  }

}
