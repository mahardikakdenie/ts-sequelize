// src/config/config.ts
import dotenv from 'dotenv';
import mysqlConfig from './config.mysql';
import postgresConfig from './config.postgres';
import sqliteConfig from './config.sqlite';
import mssqlConfig from './config.mssql';

dotenv.config();

const {
  MYSQL_DB_DIALECT,
  POSTGRES_DB_DIALECT,
  SQLITE_DB_DIALECT,
  MSSQL_DB_DIALECT,
} = process.env;

// Menentukan dialect aktif
let activeDialect = 'mysql'; // Default dialect

if (POSTGRES_DB_DIALECT === 'postgres') activeDialect = 'postgres';
if (SQLITE_DB_DIALECT === 'sqlite') activeDialect = 'sqlite';
if (MSSQL_DB_DIALECT === 'mssql') activeDialect = 'mssql';
if (MYSQL_DB_DIALECT === 'mysql') activeDialect = 'mysql';

const configs: { [key: string]: any } = {
  mysql: mysqlConfig,
  postgres: postgresConfig,
  sqlite: sqliteConfig,
  mssql: mssqlConfig,
};

export default configs[activeDialect];
