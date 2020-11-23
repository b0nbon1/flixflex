import { Connection } from 'typeorm';
import faker from 'faker';
import { testConn } from '../../../test-utils/testConn';
import { gCall } from '../../../test-utils/graphqlCall';
import {
  registerMutation,
  verifyAccountMutation,
  resendVerificationMutation
} from './mocks/graphql.mocks';
import { User } from '../../../models/User';

jest.mock('../../../lib/Mailer', () => ({
  mailer: jest.fn()
}));

jest.mock('../../../lib/Sms', () => jest.fn());

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});

afterAll(async () => {
  await conn.close;
});

describe('Register users tests', () => {
  it('should create a user using phone number', async () => {
    const user = {
      name: faker.name.firstName(),
      useEmail: false,
      email: '',
      phone: '+1(240)428-6666',
      password: faker.internet.password()
    };

    const response = await gCall({
      source: registerMutation,
      variableValues: {
        data: user
      }
    });

    expect(response).toMatchObject({
      data: {
        register: {
          name: user.name,
          phone: user.phone,
          email: null
        }
      }
    });
    const dbUser = await User.findOne({ where: [{ phone: user.phone }] });
    expect(dbUser).toBeDefined();
    expect(dbUser?.active).toBeFalsy();
    expect(dbUser?.name).toBe(user.name);
  });

  it('should create a user using email', async () => {
    const user = {
      name: faker.name.firstName(),
      useEmail: true,
      email: faker.internet.email(),
      phone: '',
      password: faker.internet.password()
    };

    const response = await gCall({
      source: registerMutation,
      variableValues: {
        data: user
      }
    });

    expect(response).toMatchObject({
      data: {
        register: {
          name: user.name,
          phone: null,
          email: user.email
        }
      }
    });
    const dbUser = await User.findOne({ where: [{ email: user.email }] });
    expect(dbUser).toBeDefined();
    expect(dbUser?.active).toBeFalsy();
    expect(dbUser?.name).toBe(user.name);
  });

  it('should not create a user that already exist', async () => {
    const user = {
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      active: true
    };

    await User.create(user).save();

    const response = await gCall({
      source: registerMutation,
      variableValues: {
        data: {
          name: user.name,
          useEmail: true,
          email: user.email,
          phone: '',
          password: user.password
        }
      }
    });

    expect(response).toMatchObject({
      errors: [
        {
          message: 'Argument Validation Error',
          path: ['register']
        }
      ],
      data: null
    });
  });

  it('should verify his account', async () => {
    const user = {
      name: faker.name.firstName(),
      email: 'newEmail@mail.com',
      password: faker.internet.password(),
      active: false,
      verificationCode: faker.random.number(999999)
    };

    const unverifiedUser = await User.create(user).save();

    const response = await gCall({
      source: verifyAccountMutation,
      variableValues: {
        data: {
          id: unverifiedUser.id,
          verificationCode: unverifiedUser.verificationCode
        }
      }
    });

    expect(response).toMatchObject({
      data: {
        verifyAccount: {
          name: unverifiedUser.name,
          phone: null,
          email: unverifiedUser.email,
          active: true
        }
      }
    });
  });

  it('should not verify with wrong code', async () => {
    const user = {
      name: faker.name.firstName(),
      email: 'newmail@mail.com',
      password: faker.internet.password(),
      active: true
    };

    const unverifiedUser = await User.create(user).save();

    const response = await gCall({
      source: verifyAccountMutation,
      variableValues: {
        data: {
          id: unverifiedUser.id,
          verificationCode: 12432
        }
      }
    });

    expect(response).toMatchObject({
      errors: [
        {
          message:
            'something went wrong while verifying the code, try to signup again',
          path: ['verifyAccount']
        }
      ],
      data: null
    });
  });

  it('should resend verification to user', async () => {
    const user = {
      name: faker.name.firstName(),
      email: 'newnewmail@mail.com',
      password: faker.internet.password(),
      active: false,
      verificationCode: faker.random.number(999999)
    };

    const unverifiedUser = await User.create(user).save();

    const response = await gCall({
      source: resendVerificationMutation,
      variableValues: {
        data: {
          email: unverifiedUser.email,
          phone: '',
          useEmail: true
        }
      }
    });

    expect(response).toMatchObject({
      data: {
        resendVerification: {
          id: unverifiedUser.id,
          name: unverifiedUser.name,
          phone: null,
          email: unverifiedUser.email,
          active: false
        }
      }
    });
  });

  it('should resend verification to user phone', async () => {
    const user = {
      name: faker.name.firstName(),
      phone: '+1(240)428-6663',
      password: faker.internet.password(),
      active: false,
      verificationCode: faker.random.number(999999)
    };

    const unverifiedUser = await User.create(user).save();

    const response = await gCall({
      source: resendVerificationMutation,
      variableValues: {
        data: {
          email: '',
          phone: unverifiedUser.phone,
          useEmail: false
        }
      }
    });

    expect(response).toMatchObject({
      data: {
        resendVerification: {
          id: unverifiedUser.id,
          name: unverifiedUser.name,
          email: null,
          phone: unverifiedUser.phone,
          active: false
        }
      }
    });
  });

  it('should not resend verification to non-existing user', async () => {
    const user = {
      email: '',
      phone: '+1(240)428-6661',
      useEmail: false
    };

    const response = await gCall({
      source: resendVerificationMutation,
      variableValues: {
        data: user
      }
    });

    expect(response).toMatchObject({
      errors: [
        {
          message: 'Email does not exist please try to signup again.',
          path: ['resendVerification']
        }
      ],
      data: null
    });
  });
});
