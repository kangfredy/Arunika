import type { Knex } from "knex";
import * as dotenv from "dotenv";
dotenv.config();

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: process.env.DB_CLIENT as string,
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "arunika_migrations",
      directory: "./src/database/migration",
    },
  },

  staging: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "arunika_migrations",
      directory: "./src/database/migration",
    },
  },

  production: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "arunika_migrations",
      directory: "./src/database/migration",
    },
  },
};

export default config;
