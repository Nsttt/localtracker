import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { ApolloServer } from 'apollo-server';

async function main() {
  const connection = await createConnection();
  const schema = await buildSchema();
  const server = new ApolloServer({ schema });
  await server.listen(4000);
  console.log('Server started');
}
