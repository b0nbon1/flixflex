import '@emotion/react';

import { ThemeProps } from '../theme';

declare module '@emotion/react' {
  export interface Theme extends ThemeProps {}
}
