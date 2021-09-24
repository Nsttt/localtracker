import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';
import bcrypt from 'bcryptjs';

import { SessionContext } from '../../types/SessionContext';
import { User } from '../../entities/User';

@Resolver()
export class LoginResolver {
  @Mutation(() => User, { nullable: true })
  async login(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() ctx: SessionContext,
  ): Promise<User | null> {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return null;
    }

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return null;
    }

    ctx.req.session!.userId = user.id;

    return user;
  }
}
