import { Table, Model, ForeignKey, Column, DataType } from 'sequelize-typescript';
import { Course } from './Course';
import { Examination } from './Examination';
import { Instructor } from './Instructor';

@Table({ tableName: 'course_examinations', underscored: true, timestamps: false, })
export class CourseExamination extends Model<CourseExamination> {

  @ForeignKey(() => Course)
  @Column
  course_id?: number;

  @ForeignKey(() => Examination)
  @Column
  examination_id?: number;

  @ForeignKey(() => Instructor)
  @Column
  supervisor_id?: number;

  @Column(DataType.DATE)
  date_taken?: string;

}
