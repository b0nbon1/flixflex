import React from 'react';

import { Background } from '../../widgets/background';
import { LogoText, FlixText, FlexText, ExploreText } from './styles';

interface ExploreViewProps {}

export const ExploreView: React.FC<ExploreViewProps> = () => {
  return (
    <Background>
      <LogoText>
        <FlixText>Flix</FlixText>
        <FlexText>Flex</FlexText>
      </LogoText>
      <ExploreText>Easy Explore</ExploreText>
      
    </Background>
  );
};
