import { Table, Model, PrimaryKey, Column, DataType, AutoIncrement, AllowNull } from 'sequelize-typescript';

@Table({ tableName: 'sequences', underscored: true, timestamps: false, })
export class Sequence extends Model<Sequence> {

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
