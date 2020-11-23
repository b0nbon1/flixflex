import { RootState } from '..';

export const themeState = (state: RootState): boolean => state.theme.isDark;
