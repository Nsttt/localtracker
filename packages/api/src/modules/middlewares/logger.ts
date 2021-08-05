import { MiddlewareFn } from 'type-graphql';
import { MyContext } from '../../types/MyContext';

export const logger: MiddlewareFn<MyContext> = async ({ context }, next) => {
  if (!context.req.session!.userId) {
    throw new Error('Not Authenticated');
  }

  return next;
};
