import React from 'react';
import { IconImage } from './styles';
import { easyIcon, fastIcon } from '../../../assets';

export const EasyTicket: React.FC = () => {
  return <IconImage source={easyIcon} />;
};

export const FastTicket: React.FC = () => {
  return <IconImage source={fastIcon} />;
};
