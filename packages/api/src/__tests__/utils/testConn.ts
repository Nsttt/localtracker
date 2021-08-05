import { createConnection } from 'typeorm';

export const testConn = (drop: boolean = false) =>
  createConnection({
    type: 'sqlite',
    database: './db-test.sqlite3',
    entities: ['src/entities/*.ts'],
    synchronize: drop,
    dropSchema: drop,
  });
