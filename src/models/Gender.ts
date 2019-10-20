import { Table, Model, PrimaryKey, Column, DataType, AutoIncrement, AllowNull, Unique } from 'sequelize-typescript';

@Table({ tableName: 'genders', underscored: true, timestamps: false, })
export class Gender extends Model<Gender> {

  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER.UNSIGNED)
  id?: number;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(4))
  symbol?: string;

  @AllowNull(false)
  @Unique
  @Column(DataType.STRING(16))
  name?: string;

  @AllowNull
  @Column(DataType.TEXT)
  description?: string;

}
