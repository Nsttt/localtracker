import { buildSchema } from 'type-graphql';
import { LoginResolver } from '../modules/user/Login';
import { LogoutResolver } from '../modules/user/Logout';
import { MeResolver } from '../modules/user/Me';
import { RegisterResolver } from '../modules/user/CreateUser';

export const createSchema = () =>
  buildSchema({
    resolvers: [LoginResolver, LogoutResolver, RegisterResolver, MeResolver],
    authChecker: ({ context: { req } }) => !!req.session.userId,
  });
