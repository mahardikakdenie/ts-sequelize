// src/config/database.ts
import { Sequelize } from 'sequelize';
import config from './config';

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      host: config.host,
      dialect: config.dialect,
    }
  );
  

export default sequelize;
