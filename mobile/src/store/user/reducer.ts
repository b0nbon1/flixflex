import { ApplicationAction } from '..';
import { USER_TYPE, TUserType } from './action';

export interface UserState {
  type: TUserType;
}

const blankState: UserState = {
  type: null,
};

const user = (
  state: UserState = blankState,
  action: ApplicationAction,
): UserState => {
  if (action.type === USER_TYPE) {
    return {
      ...state,
      type: action.payload,
    };
  }

  return state;
};

export default user;
