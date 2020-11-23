import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonView } from './styles';

export const Button: React.FC<TouchableOpacityProps> = ({
  children,
  ...rest
}) => {
  return <ButtonView {...rest}>{children}</ButtonView>;
};
