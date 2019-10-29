import * as faker from 'faker';
import { Examination } from '../models/Examination';
import { Course } from '../models/Course';
import { Sequence } from '../models/Sequence';
import { Instructor } from '../models/Instructor';

export async function generate(count: number = 1): Promise<void> {
  let course_ids: any[] = await Course.findAll();
  let sequence_ids: any[] = await Sequence.findAll();
  let instructor_ids: any[] = await Instructor.findAll();

  course_ids = course_ids.map(i => i.id);
  sequence_ids = sequence_ids.map(i => i.id);
  instructor_ids = instructor_ids.map(i => i.id);

  function createOne() {
    return {
      date_taken: faker.date.between(new Date(2019, 1, 1), new Date(2019, 12, 31)).toISOString(),
      course_id: course_ids[Math.floor(Math.random() * course_ids.length)],
      sequence_id: sequence_ids[Math.floor(Math.random() * sequence_ids.length)],
      supervisor_id: instructor_ids[Math.floor(Math.random() * instructor_ids.length)],
    }
  }

  const arr: any[] = Array.from({ length: count }, createOne);
  try {
    Examination.bulkCreate(arr);
  } catch (err) { throw err; }
}
