import React from 'react';
import { View } from 'react-native';

import { Background } from '../../widgets/background';
import { LogoText, FlixText, FlexText, ExploreText, Footer } from './styles';
import { JoinLoginButton } from './join-login-button';

interface ExploreViewProps {}

export const ExploreView: React.FC<ExploreViewProps> = ({ children }) => {
  return (
    <Background>
      <LogoText>
        <FlixText>Flix </FlixText>
        <FlexText>Flex</FlexText>
      </LogoText>
      <ExploreText>Easy Explore</ExploreText>
      {children}
      <Footer>
        <JoinLoginButton />
      </Footer>
    </Background>
  );
};
