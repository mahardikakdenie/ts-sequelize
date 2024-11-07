import { Sequelize, Dialect } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME ?? '',
  process.env.DB_USER ?? '',
  process.env.DB_PASS ?? '',
  {
    host: process.env.DB_HOST ?? '',
    dialect: process.env.DB_DIALECT as Dialect || 'mysql',
  }
);

export default sequelize;