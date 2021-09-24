import { Ctx, Mutation, Resolver } from 'type-graphql';
import { SessionContext } from '../../types/SessionContext';

@Resolver()
export class LogoutResolver {
  @Mutation(() => Boolean)
  async logout(@Ctx() ctx: SessionContext): Promise<Boolean> {
    return new Promise((res, rej) =>
      ctx.req.session!.destroy((err) => {
        if (err) {
          console.error('Error:', err);
          return rej(false);
        }

        ctx.res.clearCookie('qid');
        return res(true);
      }),
    );
  }
}
