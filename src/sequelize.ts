import { Sequelize } from 'sequelize-typescript';
import { config } from './config';

export const sequelize = new Sequelize({
  dialect: config.db.dialect as any,
  username: config.db.username,
  password: config.db.password,
  database: config.db.dbname,
  host: config.db.host,
  models: [__dirname + '/models']
});
