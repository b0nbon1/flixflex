import { Connection } from 'typeorm';
import { testConn } from '../test-utils/testConn';
import { gCall } from '../test-utils/graphqlCall';

let conn: Connection;
beforeAll(async () => {
  conn = await testConn();
});

afterAll(async () => {
  await conn.close;
});

const WelcomeQuery = `
  query {
    welcome
  }
`;

describe('Welcome to cinema tests suites', () => {
  it('should return welcome to app string', async () => {
    const response = await gCall({
      source: WelcomeQuery
    });

    expect(response).toMatchObject({
      data: {
        welcome: 'welcome to Kencinema 👋🏾'
      }
    });
  });
});
