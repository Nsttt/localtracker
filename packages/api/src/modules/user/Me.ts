import { Ctx, Query, Resolver } from 'type-graphql';
import { MyContext } from "../../types/MyContext";

import { User } from '../../entities/User';

@Resolver()
export class MeResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: MyContext): Promise<User | undefined> {
    if (!ctx.req.session!.userId) {
      return undefined; // GQL Should cast null to undefined.
    }

    return User.findOne(ctx.req.session!.userId);
  }
}
