import 'reflect-metadata';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import connectRedis from 'connect-redis';

import { redis } from './redis';
import { MeResolver } from './modules/user/Me';
import { LoginResolver } from './modules/user/Login';
import { RegisterResolver } from './modules/user/CreateUser';

export default async function main() {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [RegisterResolver, LoginResolver, MeResolver],
    authChecker: ({ context: { req } }) => {
      return !!req.session.userId;
    },
  });
  const server = new ApolloServer({
    schema,
    context: ({ req }: any) => ({ req }),
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
