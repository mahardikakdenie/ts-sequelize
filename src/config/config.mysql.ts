// src/config/config.mysql.ts
import { Options } from 'sequelize';

import dotenv from 'dotenv';

dotenv.config();

const mysqlConfig: Options = {
  database: process.env.MYSQL_DB_NAME || '',
  username: process.env.MYSQL_DB_USER || '',
  password: process.env.MYSQL_DB_PASS || '',
  host: process.env.MYSQL_DB_HOST || 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  timezone: '+07:00', // Sesuaikan dengan zona waktu Anda
  logging: false,
};

export default mysqlConfig;
