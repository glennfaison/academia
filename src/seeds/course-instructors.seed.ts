import { CourseInstructor } from '../models/CourseInstructor';
import { Course } from '../models/Course';
import { Instructor } from '../models/Instructor';

export async function generate(count: number = 1): Promise<void> {
  let course_ids: any[] = await Course.findAll();
  let instructor_ids: any[] = await Instructor.findAll();

  course_ids = course_ids.map(i => i.id);
  instructor_ids = instructor_ids.map(i => i.id);

  function createOne() {
    return {
      course_id: course_ids[Math.floor(Math.random() * course_ids.length)],
      instructor_id: instructor_ids[Math.floor(Math.random() * instructor_ids.length)],
    }
  }

  const arr: any[] = Array.from({length: count}, createOne);
  CourseInstructor.bulkCreate(arr, {fields: ['course_id', 'instructor_id']});
}
