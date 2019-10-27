import { Table, Model, Column, DataType, PrimaryKey, AutoIncrement, BelongsTo, AllowNull } from 'sequelize-typescript';
import { Course } from './Course';
import { Examination } from './Examination';
import { Instructor } from './Instructor';

@Table({ tableName: 'written_exams', underscored: true, timestamps: false, })
export class WrittenExam extends Model<WrittenExam> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  id?: number;

  @AllowNull
  @Column(DataType.INTEGER.UNSIGNED)
  number_sat?: number;

  @AllowNull
  @Column(DataType.INTEGER.UNSIGNED)
  number_passed?: number;

  course_id?: number;

  examination_id?: number;

  supervisor_id?: number;

  instructor_id?: number;

  @BelongsTo(() => Course, 'course_id')
  course?: Course;

  @BelongsTo(() => Examination, 'examination_id')
  examination?: Examination;

  @BelongsTo(() => Instructor, 'supervisor_id')
  supervisor?: Instructor;

  @BelongsTo(() => Instructor, 'instructor_id')
  instructor?: Instructor;

  @Column(DataType.DATE)
  date_taken?: string;

}
