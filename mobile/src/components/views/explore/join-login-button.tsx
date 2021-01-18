import React from 'react';
import { Entypo, Ionicons } from '@expo/vector-icons';

import JoinButton from '../../../images/svg/join-button';
import { Join, JContainer, ExploreInfoText, JText, JBtn } from './styles';
import { Button } from '../../widgets/Button';

interface JoinLoginButtonProps {
  show?: boolean;
}

export const JoinLoginButton: React.FC<JoinLoginButtonProps> = ({ show }) => {
  return (
    <Join>
      <Button>
        <JoinButton />
      </Button>
      <JContainer>
        <Entypo name="info-with-circle" size={24} color="black" />
        <ExploreInfoText>
          To explore more click Join to sign in or sign up
        </ExploreInfoText>
        <JBtn>
          <Ionicons name="ios-enter-outline" size={24} color="white" />
          <JText>Join</JText>
        </JBtn>
      </JContainer>
    </Join>
  );
};
