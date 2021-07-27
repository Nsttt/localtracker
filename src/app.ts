import 'reflect-metadata';
import Koa from 'koa';
import { ApolloServer } from 'apollo-server-koa';
import { createConnection } from 'typeorm';
import { buildSchema } from 'type-graphql';
import { AnimeResolver } from './resolvers/AnimeResolver';

export default async function main() {
  const connection = await createConnection();
  const schema = await buildSchema({
    resolvers: [AnimeResolver],
  });
  const server = new ApolloServer({ schema });
  await server.start();

  const app = new Koa();
  server.applyMiddleware({ app });

  await app.listen({ port: process.env.API_PORT || 4000 }),
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);

  return { server, app };
}
