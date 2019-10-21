import { Table, Model, PrimaryKey, Column, DataType, AutoIncrement, AllowNull, BelongsToMany } from 'sequelize-typescript';
import { Instructor } from './Instructor';
import { CourseInstructor } from './CourseInstructor';

@Table({ tableName: 'courses', underscored: true, timestamps: false, })
export class Course extends Model<Course> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  id?: number;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  title?: string;

  @AllowNull(false)
  @Column(DataType.STRING(32))
  code?: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description?: string;

  @BelongsToMany(() => Instructor, () => CourseInstructor)
  instructors?: Instructor[];

}
