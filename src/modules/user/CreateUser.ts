import { RegisterInput } from './register/RegisterInput';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import bcrypt from 'bcryptjs';

import { User } from '../../entities/User';

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async Hello() {
    return 'hello';
  }

  @Mutation(() => String)
  async register(
    @Arg('data') { name, username, password }: RegisterInput,
  ): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({
      name,
      username,
      password: hashedPassword,
    }).save();

    return user;
  }
}
