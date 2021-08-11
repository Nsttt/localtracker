import 'reflect-metadata';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import connectRedis from 'connect-redis';

import { createSchema } from './utils/createSchema';
import { redis } from './redis';

export default async function main() {
  await createConnection();

  const schema = createSchema();
  const server = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res }),
  });
  await server.start();

  const app = express();
  app.use(
    cors({
      credentials: true,
      origin: 'https://localhost:3000',
    }),
  );

  const RedisStore = connectRedis(session);
  app.use(
    session({
      store: new RedisStore({
        client: redis as any,
      }),
      name: 'qid',
      secret: 'test',
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365,
      },
    }),
  );

  server.applyMiddleware({ app });

  await app.listen({ port: process.env.API_PORT || 4000 }),
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);

  return { server, app };
}
