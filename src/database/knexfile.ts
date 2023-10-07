import {Knex} from 'knex';
import dotenv from 'dotenv'; dotenv.config();

// const database = {
//     client: `mysql2`,
//     connection: {
//         host: process.env.DB_HOST || `localhost`,
//         user: process.env.DB_USER || `root`,
//         password: process.env.DB_PASS || '',
//         database: process.env.DB_NAME || 'pidb',
//     },
//     migrations: {
//         tableName: `migrations`,
//         directory: `./migrations`,
//     },
//     seeds: {
//         directory: `./seeds`,
//     },
// } as Knex.Config;

const database = {
    client: 'sqlite3',
    connection: {
        filename: "/home/hkk/Documents/js/pi-password-manager/src/database/pidb.sqlite3",
    },
    useNullAsDefault: true
} as Knex.Config;

export = database;