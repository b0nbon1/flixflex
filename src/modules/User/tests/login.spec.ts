import { Connection } from 'typeorm';
import faker from 'faker';
import { testConn } from '../../../test-utils/testConn';
import { gCall } from '../../../test-utils/graphqlCall';
import { loginUserMutation } from './mocks/graphql.mocks';
import { User } from '../../../models/User';
import { hashPassword } from '../../../utils/hash';

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});

afterAll(async () => {
  await conn.close;
});

describe('Login users tests', () => {
  it('should login user using phone number successful', async () => {
    const password = faker.internet.password();
    const user = {
      name: faker.name.firstName(),
      email: null,
      phone: faker.phone.phoneNumber(),
      password: await hashPassword(password),
      active: true
    };

    await User.create(user).save();

    const response = await gCall({
      source: loginUserMutation,
      variableValues: {
        password,
        email: '',
        phoneNumber: user.phone
      }
    });

    expect(response).toMatchObject({
      data: {
        login: {
          name: user.name,
          phone: user.phone,
          email: null
        }
      }
    });
  });

  it('should login user using email successful', async () => {
    const password = faker.internet.password();
    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      password: await hashPassword(password),
      active: true
    };

    await User.create(user).save();

    const response = await gCall({
      source: loginUserMutation,
      variableValues: {
        password,
        email: user.email,
        phoneNumber: ''
      }
    });

    expect(response).toMatchObject({
      data: {
        login: {
          name: user.name,
          email: user.email
        }
      }
    });
  });

  it('should not login user using email or number does not exist', async () => {
    const password = faker.internet.password();
    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      password: await hashPassword(password),
      active: true
    };

    await User.create(user).save();

    const response = await gCall({
      source: loginUserMutation,
      variableValues: {
        password,
        email: faker.internet.email(),
        phoneNumber: ''
      }
    });

    expect(response).toMatchObject({
      data: {
        login: null
      }
    });
  });

  it('should not login user wrong password', async () => {
    const password = faker.internet.password();
    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      password: await hashPassword(password),
      active: true
    };

    await User.create(user).save();

    const response = await gCall({
      source: loginUserMutation,
      variableValues: {
        password: faker.internet.password(),
        email: user.email,
        phoneNumber: ''
      }
    });

    expect(response).toMatchObject({
      data: {
        login: null
      }
    });
  });

  it('should not login unverified user', async () => {
    const password = faker.internet.password();
    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber(),
      password: await hashPassword(password),
      active: false
    };

    await User.create(user).save();

    const response = await gCall({
      source: loginUserMutation,
      variableValues: {
        password,
        email: user.email,
        phoneNumber: ''
      }
    });

    expect(response).toMatchObject({
      data: {
        login: null
      }
    });
  });
});
