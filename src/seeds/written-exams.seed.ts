import * as faker from 'faker';
import { WrittenExam } from '../models/WrittenExam';
import { Course } from '../models/Course';
import { Examination } from '../models/Examination';
import { Instructor } from '../models/Instructor';

export async function generate(count: number = 1): Promise<void> {
  let course_ids: any[] = await Course.findAll();
  let examination_ids: any[] = await Examination.findAll();
  let instructor_ids: any[] = await Instructor.findAll();

  course_ids = course_ids.map(i => i.id);
  examination_ids = examination_ids.map(i => i.id);
  instructor_ids = instructor_ids.map(i => i.id);

  function createOne() {
    return {
      date_taken: faker.date.between(new Date(2019, 1, 1), new Date(2019, 12, 31)).toISOString(),
      course_id: course_ids[Math.floor(Math.random() * course_ids.length)],
      examination_id: examination_ids[Math.floor(Math.random() * examination_ids.length)],
      supervisor_id: instructor_ids[Math.floor(Math.random() * instructor_ids.length)],
    }
  }

  const arr: any[] = Array.from({ length: count }, createOne);
  try {
    WrittenExam.bulkCreate(arr);
  } catch (err) { throw err; }
}
