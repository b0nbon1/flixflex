import { put, ForkEffect, takeLatest, call } from 'redux-saga/effects';
import { getData } from '../../utils/local-storage';
import { THEME_MODE, WATCH_THEME_MODE } from './action';

export function* dispatchDarkTheme(): Generator {
  const themeType = yield call(getData, '@theme_Type');
  yield put({ type: THEME_MODE, payload: themeType ?? true });
}

export function* watchDarkChange(): Generator<
  ForkEffect<typeof WATCH_THEME_MODE>
> {
  yield takeLatest(WATCH_THEME_MODE, dispatchDarkTheme);
}
