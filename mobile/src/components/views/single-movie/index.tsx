import React from 'react';
import { View, Text } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Background } from '../../widgets/background';
import { Button } from '../../widgets/Button';
import { Header, HeaderText, ImageBGView } from './styles';

const SingleMovie = () => {
  const navigation = useNavigation();
  return (
    <Background>
      <Header>
        <Button onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={30} color="#fff" />
        </Button>
        <HeaderText>Discovery of Witches</HeaderText>
      </Header>
      <ImageBGView source={require('../../../images/discovery.jpg')} >
        <Button>
          <Ionicons name="md-play-circle-outline" size={64} color="#ff2435" />
        </Button>
      </ImageBGView>
    </Background>
  )
};

export default SingleMovie
