// src/config/config.sqlite.ts
import { Options } from 'sequelize';

const sqliteConfig: Options = {
  dialect: 'sqlite',
  storage: process.env.SQLITE_DB_STORAGE || './database.sqlite',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  timezone: '+07:00',
  logging: false,
};

export default sqliteConfig;
