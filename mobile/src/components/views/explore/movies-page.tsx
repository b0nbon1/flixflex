import React from 'react';
import { Dimensions, View, ScrollView } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import { Container, ExploreInfoText, HeaderTitle } from './styles';
import { MovieCard, MoviceCardProps } from '../../widgets/movie-card';
import { VerticalMovieCard } from '../../widgets/movie-card/vertical-card';
import { wp, hp } from '../../../utils/normalize';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Number(hp(250));
export const CAROUSEL_ITEM_WIDTH = Number(wp(305));

interface NowPlayingProps {
  data: {
    image: any;
    trailerLink?: string;
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
              <MovieCard comingSoon={type === 'Coming Soon Movies'} {...item} />
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
          <VerticalMovieCard key={item.id} {...item} />
        ))}
      </Container>
    </ScrollView>
  );
};
