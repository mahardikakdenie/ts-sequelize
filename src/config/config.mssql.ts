// src/config/config.mssql.ts
import { Options } from 'sequelize';

const mssqlConfig: Options = {
  database: process.env.MSSQL_DB_NAME || '',
  username: process.env.MSSQL_DB_USER || '',
  password: process.env.MSSQL_DB_PASS || '',
  host: process.env.MSSQL_DB_HOST || 'localhost',
  port: Number(process.env.MSSQL_DB_PORT) || 1433,
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true, // Sesuaikan kebutuhan enkripsi Anda
    },
  },
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  timezone: '+07:00',
  logging: false,
};

export default mssqlConfig;
