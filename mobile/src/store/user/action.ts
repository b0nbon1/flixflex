export const WATCH_USER_TYPE = '@watch/USER_TYPE';
export const USER_TYPE = '@take/USER_TYPE';

export type UserAction = WatchUserType | UserType;

export type TUserType = 'guest' | 'user' | 'admin' | null;

export class WatchUserType {
  public readonly type = WATCH_USER_TYPE;
}

export class UserType {
  public readonly type = USER_TYPE;

  constructor(public payload: TUserType) {}
}

export const switchUserType = (): WatchUserType => ({
  type: WATCH_USER_TYPE,
});
