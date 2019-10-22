import { CrudController } from './crud.controller';
import { Gender } from '../models/Gender';

export class GenderController extends CrudController {

  constructor() {
    super(Gender);
  }

}
