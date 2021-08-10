import React from 'react';
import { Dimensions, View, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

import { Container, ExploreInfoText, HeaderTitle } from './styles';
import { MovieCard, MoviceCardProps } from '../../widgets/movie-card';
import { VerticalMovieCard } from '../../widgets/movie-card/vertical-card';
import { Button } from '../../widgets/Button';
import { wp, hp } from '../../../utils/normalize';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Number(hp(250));
export const CAROUSEL_ITEM_WIDTH = Number(wp(305));

interface NowPlayingProps {
  data: {
    image: any;
    videoId: string;
    title: string;
    time: string;
    genre: string;
    year: number;
    id: number;
    info: string;
  }[];
  description: string;
  type: 'Upcoming Movies' | 'Coming Soon Movies';
}

export const ExploreMoviesView: React.FC<NowPlayingProps> = ({
  data,
  description,
  type,
}) => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Container>
        <ExploreInfoText>{description}</ExploreInfoText>
        <View style={{ flex: 0, marginVertical: Number(hp(30)) }}>
          <Carousel
            layout="default"
            data={data}
            firstItem={Math.floor(data.length / 2)}
            useScrollView
            renderItem={({ item }: { item: MoviceCardProps }) => (
              <Button onPress={() => navigation.navigate('SingleMovie')}>
                <MovieCard comingSoon={type === 'Coming Soon Movies'} {...item} />
              </Button>
            )}
            sliderWidth={SCREEN_WIDTH}
            itemWidth={CAROUSEL_ITEM_WIDTH}
            sliderHeight={SCREEN_HEIGHT}
            itemHeight={SCREEN_HEIGHT}
            contentContainerCustomStyle={{ flex: 0 }}
            slideStyle={{ flex: 0 }}
          />
        </View>
        <HeaderTitle>{type}</HeaderTitle>
        {data.map(item => (
          <Button key={item.id} onPress={() => navigation.navigate('SingleMovie')}>
            <VerticalMovieCard {...item} />
          </Button>
        ))}
      </Container>
    </ScrollView>
  );
};
