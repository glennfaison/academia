import { Table, Model, ForeignKey, Column } from 'sequelize-typescript';
import { Course } from './Course';
import { Instructor } from './Instructor';

@Table({ tableName: 'course_instructors', underscored: true, timestamps: false, })
export class CourseInstructor extends Model<CourseInstructor> {

  @ForeignKey(() => Course)
  @Column
  course_id?: number;

  @ForeignKey(() => Instructor)
  @Column
  instructor_id?: number;

}
