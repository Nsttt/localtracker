import { Connection } from 'typeorm';
import faker from 'faker';

import { gCall } from '../../../test-utils/gCall';
import { testConn } from '../../../test-utils/testConn';
import { User } from '../../../entities/User';

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});
afterAll(async () => {
  await conn.close();
});

const registerMutation = `
mutation Register($data: RegisterInput!) {
    register(data: $data) {
    id
    name
    username
    }
}
`;

describe('Register', () => {
  it('Creates a user', async () => {
    const user = {
      name: faker.name.firstName(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
    };

    const response = await gCall({
      source: registerMutation,
      variableValues: {
        data: user,
      },
    });

    expect(response).toMatchObject({
      data: {
        register: {
          name: user.name,
          username: user.username,
        },
      },
    });

    const userFromDB = await User.findOne({
      where: {
        name: user.name,
        username: user.username,
        password: user.password,
      },
    });
    expect(userFromDB).toBeDefined();
    expect(userFromDB!.username).toBe(user.username);
    expect(userFromDB!.name).toBe(user.name);
    expect(userFromDB!.password).toBe(user.password);
  });
});
