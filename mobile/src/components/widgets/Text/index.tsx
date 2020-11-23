import React from 'react';
import { TextProps } from 'react-native';

import { TextView } from './styles';

interface TextViewProps extends TextProps {
  bold?: boolean;
}

export const Text: React.FC<TextViewProps> = ({ children, bold, ...rest }) => {
  return (
    <TextView bold={bold} {...rest}>
      {children}
    </TextView>
  );
};
