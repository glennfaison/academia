import { Table, Model, ForeignKey, Column } from 'sequelize-typescript';
import { Course } from './Course';
import { Instructor } from './Instructor';

@Table({ tableName: 'course_instructors', underscored: true, timestamps: false, })
export class CourseInstructor extends Model<CourseInstructor> {

  @ForeignKey(() => Course)
  @Column({ unique: 'course_instructors_instructor_id_course_id_unique' })
  course_id?: number;

  @ForeignKey(() => Instructor)
  @Column({ unique: 'course_instructors_instructor_id_course_id_unique' })
  instructor_id?: number;

}
