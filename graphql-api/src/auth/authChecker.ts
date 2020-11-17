import { AuthChecker } from 'type-graphql';
import { Context } from '../types/Context';

export const authChecker: AuthChecker<Context> = (
  {
    context: {
      req: { session }
    }
  },
  roles
) => {
  if (roles.length === 0) {
    // if `@Authorized()`, check only is user exist
    return !!session.userId;
  }
  // there are some roles defined now

  if (!session.userId) {
    return false;
  }

  if (session.user.role.some((role: any) => roles.includes(role))) {
    // grant access if the roles overlap
    return true;
  }

  // no roles matched, restrict access
  return false;
};
