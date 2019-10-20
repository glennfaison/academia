import { Table, PrimaryKey, AutoIncrement, Column, DataType, AllowNull, Unique, IsEmail, Model, BelongsTo } from 'sequelize-typescript';
import { Gender } from './Gender';
import { Classroom } from './Classroom';

@Table({ tableName: 'students', underscored: true, timestamps: false, })
export class Student extends Model<Student> {

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
  @Unique
  @Column(DataType.STRING(128))
  username?: string;

  @IsEmail
  @AllowNull
  @Unique
  @Column(DataType.STRING(128))
  email?: string;

  @AllowNull
  @Column(DataType.STRING(512))
  password?: string;

  @AllowNull
  @Column(DataType.DATE)
  date_of_birth?: string;

  @AllowNull
  @Column(DataType.STRING)
  place_of_birth?: string;

  @AllowNull
  @Column(DataType.STRING)
  image_path?: string;

  @BelongsTo(() => Gender, 'gender_id')
  gender?: Gender;

  @BelongsTo(() => Classroom, 'classroom_id')
  classroom?: Classroom;

}
