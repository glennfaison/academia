import * as genders from './genders.seed';
import * as sequences from './sequences.seed';
import * as classrooms from './classrooms.seed';
import * as courses from './courses.seed';
import * as instructors from './instructors.seed';
import * as students from './students.seed';
import * as examinations from './examinations.seed';
import * as courseInstructors from './course-instructors.seed';

export async function generate() {
  try {
    await genders.generate();
  } catch (err) { console.log('failed to complete generation of genders data.')}
  try {
    await sequences.generate(10);
  } catch (err) { console.log('failed to complete generation of examinations data.')}
  try {
    await classrooms.generate(28)
  } catch (err) { console.log('failed to complete generation of classrooms data.')}
  try {
    await courses.generate(15 * 7);
  } catch (err) { console.log('failed to complete generation of courses data.')}
  try {
    await instructors.generate(4 * 15);
  } catch (err) { console.log('failed to complete generation of instructors data.')}
  try {
    await students.generate(50 * 28);
  } catch (err) { console.log('failed to complete generation of students data.')}
  try {
    await examinations.generate(100);
  } catch (err) { console.log('failed to complete generation of Written Exams data.')}
  try {
    await courseInstructors.generate(100);
  } catch (err) { console.log('failed to complete generation of Course Instructors data.')}
  console.log('\nSeeding Complete\n');
}
