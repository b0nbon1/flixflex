import React from 'react';
import { ViewProps, StatusBar } from 'react-native';

import { BackgroundView } from './styles';

export const Background: React.FC<ViewProps> = ({ children, ...rest }) => {
  return (
    <BackgroundView {...rest}>
      <StatusBar barStyle="light-content" />
      {children}
    </BackgroundView>
  );
};
