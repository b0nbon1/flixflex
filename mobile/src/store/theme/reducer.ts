import { ApplicationAction } from '..';
import { THEME_MODE } from './action';

export interface ThemeState {
  isDark: boolean;
}

const blankState: ThemeState = {
  isDark: true,
};

const theme = (
  state: ThemeState = blankState,
  action: ApplicationAction,
): ThemeState => {
  if (action.type === THEME_MODE) {
    return {
      ...state,
    };
  }

  return state;
};

export default theme;
