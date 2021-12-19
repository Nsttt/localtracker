import { Connection } from 'typeorm';
import faker from 'faker';

import { gCall } from '../../../test-utils/gCall';
import { testConn } from '../../../test-utils/testConn';
import { User } from '../../../entities/User/User';

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});
afterAll(async () => {
  await conn.close();
});

const meQuery = `
{
me {
    id
    name
    username
    }
}
`;

describe('Me', () => {
  it('Gets the user', async () => {
    const user = await User.create({
      name: faker.name.firstName(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
    }).save();

    const response = await gCall({
      source: meQuery,
      userId: user.id,
    });

    expect(response).toMatchObject({
      data: {
        me: {
          id: `${user.id}`,
          name: user.name,
          username: user.username,
        },
      },
    });
  });
  
  it('Returns null', async () => {
    const response = await gCall({
      source: meQuery,
    });

    expect(response).toMatchObject({
      data: {
        me: null,
      },
    });
  });
});
