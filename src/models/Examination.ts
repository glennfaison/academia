import { Table, Model, Column, DataType, PrimaryKey, AutoIncrement, BelongsTo, AllowNull } from 'sequelize-typescript';
import { Course } from './Course';
import { Sequence } from './Sequence';
import { Instructor } from './Instructor';
import { Classroom } from './Classroom';

@Table({ tableName: 'examinations', underscored: true, timestamps: false, })
export class Examination extends Model<Examination> {

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

  sequence_id?: number;

  supervisor_id?: number;

  instructor_id?: number;

  classroom_id?: number;

  @BelongsTo(() => Course, 'course_id')
  course?: Course;

  @BelongsTo(() => Sequence, 'sequence_id')
  sequence?: Sequence;

  @BelongsTo(() => Instructor, 'supervisor_id')
  supervisor?: Instructor;

  @BelongsTo(() => Instructor, 'instructor_id')
  instructor?: Instructor;

  @BelongsTo(() => Instructor, 'classroom_id')
  classroom?: Classroom;

  @Column(DataType.DATE)
  date_taken?: string;

}
