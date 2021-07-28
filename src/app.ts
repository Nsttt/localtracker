import 'reflect-metadata';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { RegisterResolver } from './modules/user/CreateUser';

export default async function main() {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [RegisterResolver],
  });
  const server = new ApolloServer({ schema });
  await server.start();

  const app = express();
  app.use(cors({
    credentials: true,
    origin: process.env.front_uri,
  }))
  app.use(session({
    store: ,
    name: 'qid',
    secret: "test",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
    }
  }));

  server.applyMiddleware({ app });

  await app.listen({ port: process.env.API_PORT || 4000 }),
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);

  return { server, app };
}
