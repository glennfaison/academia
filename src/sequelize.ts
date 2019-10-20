import { Sequelize } from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'mysql',
  username: 'root',
  password: 'root',
  database: 'academia',
  models: [__dirname + '/models']
});
