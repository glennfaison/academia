import * as faker from 'faker';
import { Course } from '../models/Course';

export async function generate(count: number = 1): Promise<void> {
  const arr: any[] = Array.from({length: count}, createOne);
  Course.bulkCreate(arr);
}

function createOne() {
  return {
    title: faker.random.words(2),
    description: faker.random.words(10),
    code: faker.random.alphaNumeric(6),
  };
}
