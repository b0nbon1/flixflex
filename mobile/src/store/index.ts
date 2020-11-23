import { combineReducers } from 'redux';
import { all, AllEffect, fork, ForkEffect } from 'redux-saga/effects';
import {
  configureStore,
  getDefaultMiddleware,
  EnhancedStore,
} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createInjectorsEnhancer } from 'redux-injectors';

import { useDispatch as _useDispatch } from 'react-redux';
import { ThemeAction } from './theme/action';
import theme from './theme/reducer';
import { watchDarkChange } from './theme/saga';
import { UserAction } from './user/action';
import user from './user/reducer';
import { watchWatchUserType } from './user/saga';

export type ApplicationAction = ThemeAction | UserAction;

export function* rootSaga(): IterableIterator<
  AllEffect<ForkEffect<ApplicationAction>>
> {
  yield all([fork(watchDarkChange), fork(watchWatchUserType)]);
}

let rootReducer = combineReducers({
  theme,
  user,
});

const createReducer = (injectedReducers = {}) => {
  rootReducer = combineReducers({ ...injectedReducers, theme, user });
  return rootReducer;
};

export type RootState = ReturnType<typeof rootReducer>;

function configureAppStore(initialState = {}): EnhancedStore {
  const reduxSagaMonitorOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const { run: runSaga } = sagaMiddleware;

  const middlewares = [sagaMiddleware];
  const enhancers = [
    createInjectorsEnhancer({ createReducer: createReducer as never, runSaga }),
  ];
  const store = configureStore({
    reducer: createReducer(),
    middleware: [...getDefaultMiddleware(), ...middlewares],
    preloadedState: initialState,
    enhancers,
  });

  sagaMiddleware.run(rootSaga);
  return store as never;
}

export const useDispatch = (): ((event: ApplicationAction) => void) => {
  const dispatch = _useDispatch();
  return (event: ApplicationAction) => {
    dispatch(event);
  };
};

const initialState = {};
const store = configureAppStore(initialState);

export default store;
