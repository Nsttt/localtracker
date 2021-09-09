import { Arg, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';
import bcrypt from 'bcryptjs';
import { RegisterInput } from './register/RegisterInput';

import { User } from '../../entities/User';

@Resolver()
export class RegisterResolver {

  @Query(() => String)
  async Hello() {
    return 'hello';
  }

  @Mutation(() => User)
  async register(@Arg('data') { name, username, password }: RegisterInput): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      username,
      password: hashedPassword,
    }).save();

    return user;
  }
}
