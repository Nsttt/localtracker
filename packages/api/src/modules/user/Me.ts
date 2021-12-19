import { Ctx, Query, Resolver } from 'type-graphql';
import { SessionContext } from '../../types/SessionContext';

import { User } from '../../entities/User/User';

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: SessionContext): Promise<User | undefined> {
    if (!ctx.req.session!.userId) {
      return undefined; // GQL Should cast null to undefined.
    }

    return User.findOne(ctx.req.session!.userId);
  }
}
