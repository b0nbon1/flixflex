import { takeLatest, put, ForkEffect, call } from 'redux-saga/effects';
import { getData } from '../../utils/local-storage';
import { USER_TYPE, WATCH_USER_TYPE } from './action';

export function* dispatchUserType(): Generator {
  const userType = yield call(getData, '@user_Type');
  yield put({ type: USER_TYPE, payload: userType });
}

export function* watchWatchUserType(): Generator<
  ForkEffect<typeof WATCH_USER_TYPE>
> {
  yield takeLatest(WATCH_USER_TYPE, dispatchUserType);
}
