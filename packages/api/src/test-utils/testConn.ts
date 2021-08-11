import { createConnection } from 'typeorm';

export const testConn = (drop: boolean = false) =>
  createConnection({
    type: 'sqlite',
    database: './db-test.sqlite3',
    entities: [`${__dirname}../../entities/*.*`],
    synchronize: drop,
    dropSchema: drop,
  });
