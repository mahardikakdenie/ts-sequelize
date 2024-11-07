// src/config/config.postgres.ts
import { Options } from 'sequelize';

const postgresConfig: Options = {
  database: process.env.POSTGRES_DB_NAME || '',
  username: process.env.POSTGRES_DB_USER || '',
  password: process.env.POSTGRES_DB_PASS || '',
  host: process.env.POSTGRES_DB_HOST || 'localhost',
  port: Number(process.env.POSTGRES_DB_PORT) || 5432,
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Sesuaikan kebutuhan SSL Anda
    },
  },
  timezone: '+07:00',
  logging: false,
};

export default postgresConfig;
