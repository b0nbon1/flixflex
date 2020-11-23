export const WATCH_THEME_MODE = '@watch/THEME';
export const THEME_MODE = '@take/THEME';

export type ThemeAction = WatchTheme | Theme;

export class WatchTheme {
  public readonly type = WATCH_THEME_MODE;
}

export class Theme {
  public readonly type = THEME_MODE;
}

export const switchTheme = (): {
  type: typeof WATCH_THEME_MODE;
} => ({
  type: WATCH_THEME_MODE,
});
