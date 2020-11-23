import { Connection } from 'typeorm';
import faker from 'faker';
import { testConn } from '../../../test-utils/testConn';
import { gCall } from '../../../test-utils/graphqlCall';
import {
  ProfileMutation,
  ProfileQuery,
  AllUsersQuery
} from './mocks/graphql.mocks';
import { User, RoleEnum } from '../../../models/User';
import { hashPassword } from '../../../utils/hash';

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});

afterAll(async () => {
  await conn.close;
});

describe('Profile mutation', () => {
  it('should be able to update the profile', async () => {
    const password = faker.internet.password();
    const user = {
      name: faker.name.firstName(),
      email: null,
      phone: faker.phone.phoneNumber(),
      password: await hashPassword(password),
      active: true
    };

    const newUser = await User.create(user).save();

    const response = await gCall({
      source: ProfileMutation,
      variableValues: {
        data: {
          email: 'bon@mail.com',
          name: 'bon'
        }
      },
      userId: newUser.id,
      user: newUser
    });

    expect(response).toMatchObject({
      data: {
        updateProfile: {
          name: 'bon',
          email: 'bon@mail.com'
        }
      }
    });
  });

  it('should be able to query profile', async () => {
    const password = faker.internet.password();
    const user = {
      name: faker.name.firstName(),
      email: null,
      phone: faker.phone.phoneNumber(),
      password: await hashPassword(password),
      active: true
    };

    const newUser = await User.create(user).save();

    const response = await gCall({
      source: ProfileQuery,
      userId: newUser.id,
      user: newUser
    });

    expect(response).toMatchObject({
      data: {
        profile: {
          name: user.name,
          email: user.email
        }
      }
    });
  });

  it('user should not be able to query all users', async () => {
    const password = faker.internet.password();
    const user = {
      name: faker.name.firstName(),
      email: null,
      phone: faker.phone.phoneNumber(),
      password: await hashPassword(password),
      active: true
    };

    const newUser = await User.create(user).save();

    const response = await gCall({
      source: AllUsersQuery,
      userId: newUser.id,
      user: newUser
    });

    expect(response).toMatchObject({
      data: null
    });
  });

  it('Admin should not be able to query all users', async () => {
    const password = faker.internet.password();
    const user = {
      name: faker.name.firstName(),
      email: null,
      phone: faker.phone.phoneNumber(),
      password: await hashPassword(password),
      active: true,
      role: [RoleEnum.ADMIN]
    };

    const newUser = await User.create(user).save();

    const response = await gCall({
      source: AllUsersQuery,
      userId: newUser.id,
      user: newUser
    });

    expect(response.data.allUsers).toContainEqual({ id: newUser.id });
  });
});
