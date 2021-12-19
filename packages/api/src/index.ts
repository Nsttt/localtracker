import 'reflect-metadata';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import Redis from 'ioredis';
import connectRedis from 'connect-redis';

import { createSchema } from './utils/createSchema';
import { SessionContext } from './types/SessionContext';

async function main() {
  await createConnection();

  const schema = await createSchema();
  const server = new ApolloServer({
    schema,
    context: ({ req, res }: SessionContext) => ({ req, res }),
  });
  await server.start();

  const app = express();
  const RedisStore = connectRedis(session);
  const redisClient = new Redis();

  app.use(
    session({
      store: new RedisStore({
        client: redisClient,
        disableTouch: true,
      }),
      name: 'qid',
      secret: 'qowiueojwojfalksdjoqiwueo',
      resave: false,
      saveUninitialized: true,
      cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 1000 * 60 * 60 * 24 * 365 * 10,
      },
    }),
    cors({
      // origin: 'http://localhost:3000',
      // credentials: true,
    }),
  );

  server.applyMiddleware({ app });

  app.listen({ port: process.env.API_PORT || 4000 }, () => {
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
  });

  return { server, app };
}

main();
