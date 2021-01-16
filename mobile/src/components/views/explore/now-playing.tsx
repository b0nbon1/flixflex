import React from 'react';
import { View, Text } from 'react-native';

interface NowPlayingProps {}

export const NowPlaying: React.FC<NowPlayingProps> = () => {
  return (
    <View>
      <Text>Now Playing</Text>
    </View>
  );
};
