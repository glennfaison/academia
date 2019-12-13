import { Table, Model, Column, DataType, PrimaryKey, AutoIncrement, BelongsTo, AllowNull, AfterCreate } from 'sequelize-typescript';
import { Course } from './Course';
import { Sequence } from './Sequence';
import { Instructor } from './Instructor';
import { Classroom } from './Classroom';
import { StudentExamination } from './StudentExamination';
import { Student } from './Student';

@Table({ tableName: 'examinations', underscored: true, timestamps: false, })
export class Examination extends Model<Examination> {

  @AfterCreate
  static async createStudentExams(instance: Examination) {
    const classroom_id: any = instance.classroom_id;
    if (!!classroom_id) { return; }
    const students: Student[] = await Student.findAll({ where: { classroom_id: classroom_id } });
    const promises = students.map(i => {
      const studentExam = new StudentExamination();
      studentExam.course_id = instance.course_id;
      studentExam.examination_id = instance.id;
      studentExam.sequence_id = instance.sequence_id;
      studentExam.student_id = i.id;
      return studentExam.save();
    });
    await Promise.all(promises);
  }

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
