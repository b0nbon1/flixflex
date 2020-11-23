import React from 'react';
import { ImageProps } from 'react-native';

import { ImageView } from './styles';

export const Image: React.FC<ImageProps & any> = props => {
  return <ImageView {...props} />;
};
