import { Table, Model, PrimaryKey, Column, DataType, AutoIncrement, AllowNull, BelongsTo, BeforeSave } from 'sequelize-typescript';
import { Student } from './Student';
import { Examination } from './Examination';
import { Course } from './Course';
import { Sequence } from './Sequence';

@Table({ tableName: 'student_examinations', underscored: true, timestamps: false, })
export class StudentExamination extends Model<StudentExamination> {

  @BeforeSave
  static async setCourseId(instance: StudentExamination) {
    const examination = await Examination.findByPk(instance.examination_id);
    if (!!examination) { instance.course_id = examination.course_id; }
  }

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  id?: number;

  student_id?: number;

  sequence_id?: number;

  examination_id?: number;

  course_id?: number;

  @AllowNull
  @Column(DataType.DECIMAL(2))
  total_mark?: number

  @AllowNull
  @Column(DataType.DECIMAL(2))
  score?: number;

  @BelongsTo(() => Student, 'student_id')
  student?: Student;

  @BelongsTo(() => Sequence, 'sequence_id')
  sequence?: Sequence;

  @BelongsTo(() => Examination, 'examination_id')
  examination?: Examination;

  @BelongsTo(() => Course, 'course_id')
  course?: Course;

}
