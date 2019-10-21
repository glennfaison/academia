import { Table, DefaultScope, AllowNull, Unique, Column, DataType, IsEmail, PrimaryKey, AutoIncrement, Model, BelongsToMany, BelongsTo } from 'sequelize-typescript';
import { Gender } from './Gender';
import { Course } from './Course';
import { Classroom } from './Classroom';
import { CourseInstructor } from './CourseInstructor';

@DefaultScope(() => ({ include: [{ model: Gender }] }))
@Table({ tableName: 'instructors', underscored: true, timestamps: false, })
export class Instructor extends Model<Instructor> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  id?: number;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  first_name?: string;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  other_names?: string;

  @AllowNull
  @Column(DataType.DATE)
  date_of_birth?: string;

  @AllowNull
  @Column(DataType.STRING)
  place_of_birth?: string;

  @AllowNull
  @Column(DataType.STRING)
  image_path?: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(128))
  username?: string;

  @IsEmail
  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(128))
  email?: string;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  password?: string;

  gender_id?: number;

  @BelongsTo(() => Gender, 'gender_id')
  gender?: Gender;

  @BelongsToMany(() => Course, () => CourseInstructor)
  courses_taught?: Course[];

  @BelongsToMany(() => Classroom,
    { through: 'class_masters', foreignKey: 'instructor_id', otherKey: 'classroom_id' })
  classrooms?: Classroom[];

}
