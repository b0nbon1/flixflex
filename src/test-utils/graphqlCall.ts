/* eslint-disable import/no-unresolved */
import { graphql, GraphQLSchema } from 'graphql';
import { Maybe } from 'graphql/jsutils/Maybe';
import { createSchema } from '../graphql/schema';

interface Options {
  source: string;
  variableValues?: Maybe<{
    [key: string]: any;
  }>;
  userId?: string;
}

let schema: GraphQLSchema;

export const gCall = async ({
  source,
  variableValues,
  userId
}: Options): Promise<any> => {
  if (!schema) {
    schema = await createSchema();
  }

  return graphql({
    schema,
    source,
    variableValues,
    contextValue: {
      req: {
        session: {
          userId
        }
      },
      res: {
        clearCookie: jest.fn()
      }
    }
  });
};
