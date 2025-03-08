import * as dotenv from 'dotenv';
dotenv.config();

export const envConfig = {
  port: process.env.PORT ?? 3000,
  database: {
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT!,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  }
};