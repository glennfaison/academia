import { Table, Model, PrimaryKey, Column, DataType, AutoIncrement, AllowNull, BelongsToMany } from 'sequelize-typescript';
import { Instructor } from './Instructor';

@Table({ tableName: 'classrooms', underscored: true, timestamps: false, })
export class Classroom extends Model<Classroom> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  id?: number;

  @AllowNull(false)
  @Column(DataType.INTEGER.UNSIGNED)
  level?: number;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  title?: string;

  @BelongsToMany(() => Instructor,
    { through: 'class_masters', foreignKey: 'classroom_id', otherKey: 'instructor_id' })
  classMasters?: Instructor[];

}
