import { font } from '../utils/normalize';

const fontFamily = {
  system: 'System',
  light: 'Poppins-Light',
  regular: 'Poppins-Regular',
  bold: 'Poppins-Bold',
};

const fontSize = {
  tiny: `${font(10)}px`,
  xs: `${font(12)}px`,
  sm: `${font(14)}px`,
  base: `${font(16)}px`,
  lg: `${font(18)}px`,
  xl: `${font(20)}px`,
  '2xl': `${font(24)}px`,
  '3xl': `${font(30)}px`,
  '4xl': `${font(36)}px`,
  '5xl': `${font(48)}px`,
  '6xl': `${font(64)}px`,
  '7xl': `${font(80)}px`,
};

export { fontFamily, fontSize };
