import { Table, Model, PrimaryKey, Column, DataType, AutoIncrement, AllowNull } from 'sequelize-typescript';

@Table({ tableName: 'examinations', underscored: true, timestamps: false, })
export class Examination extends Model<Examination> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  id?: number;

  @AllowNull(false)
  @Column(DataType.STRING(128))
  title?: string;

  @AllowNull(false)
  @Column(DataType.TEXT)
  description?: string;

}
