import { RootState } from '..';
import { TUserType } from './action';

export const userTypeState = (state: RootState): TUserType => state.user.type;
