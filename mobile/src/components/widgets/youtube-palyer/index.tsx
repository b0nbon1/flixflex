import React, { useRef, useState, useCallback } from 'react';
import { View, Text, Dimensions, PixelRatio, Alert } from 'react-native';
import YouTube from "react-native-youtube-iframe";

import { SwipeDownModal } from '../modal';

interface YouTubePlayerProps {
  isVisible: boolean;
  videoId: string;
  onClose: () => void;
}

export const YoutubePlayer = ({ isVisible, onClose, videoId }: YouTubePlayerProps) => {
  const [playing, setPlaying] = useState(true);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);
  return (
    <SwipeDownModal  isVisible={isVisible} onClose={onClose} height={PixelRatio.roundToNearestPixel(Dimensions.get('window').width / (16 / 9)) + 100}>
      <YouTube
        width={Dimensions.get('window').width}
        height={PixelRatio.roundToNearestPixel(Dimensions.get('window').width / (16 / 9))}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
    </SwipeDownModal>
  )
}

