import * as faker from 'faker';
import { Classroom } from '../models/Classroom';

export async function generate(count: number = 1): Promise<void> {
  const arr: any[] = Array.from({length: count}, createOne);
  Classroom.bulkCreate(arr);
}

function createOne() {
  return {
    level: faker.random.number({min: 1, max: 7}),
    title: faker.random.words(2),
  }
}
