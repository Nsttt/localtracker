import { MiddlewareFn } from 'type-graphql';
import { SessionContext } from '../../types/SessionContext';

export const isAuth: MiddlewareFn<SessionContext> = async ({ context }, next) => {
  if (!context.req.session!.userId) {
    throw new Error('Not Authenticated');
  }

  return next;
};
