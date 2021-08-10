import React from 'react';
import { ImagePropsBase } from 'react-native';

import { BackgroundView } from './styles';

export const ImageBackground: React.FC<ImagePropsBase> = ({ source, children, ...rest }) => {
  return (
    <BackgroundView source={source} {...rest}>
      {children}
    </BackgroundView>
  );
};

