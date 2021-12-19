import { Request, Response } from 'express';

export type SessionContext = {
  req: Request & {
    session: {
      userId?: any;
    };
  };
  res: Response & {
    session: {
      userId?: any;
    };
  };
};
