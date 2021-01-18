import React from 'react';
import { ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Rating } from 'react-native-ratings';

import {
  Container,
  ExploreInfoText,
  LContainer,
  LAllowButton,
  LInfoText,
  CheckIcon,
  LHeader,
  LHeaderText,
  TheaterContainer,
  ImageView,
  TheaterDetails,
  TheaterTitle,
  TheaterInfo,
  TheaterInfoText,
} from './styles';

interface TheaterProps {
  image: any;
  title: string;
  info: string;
  stars: number;
  id: number;
}

interface NearTheaterProps {
  location?: string;
  data: TheaterProps[];
  handleLocation(): void;
}

interface LocationAccesRequestProps {
  handleLocation(): void;
}

export const LocationAccesRequest: React.FC<LocationAccesRequestProps> = ({
  handleLocation,
}) => {
  return (
    <LContainer>
      <LHeader>
        <Entypo name="location-pin" size={24} color="#ff2435" />
        <LHeaderText>LOCATION</LHeaderText>
      </LHeader>
      <LInfoText>
        Please, Enable location access , so we could provide you accurate result
        of nearest show and theaters
      </LInfoText>
      <LAllowButton onPress={() => handleLocation()}>
        <CheckIcon source={require('../../../../assets/check-green.png')} />
        <LInfoText style={{ marginLeft: 12 }}>Allow</LInfoText>
      </LAllowButton>
    </LContainer>
  );
};

export const MovieTheater: React.FC<TheaterProps> = ({
  image,
  title,
  info,
  stars,
}) => {
  return (
    <TheaterContainer>
      <ImageView source={image} />
      <TheaterDetails>
        <TheaterTitle bold numberOfLines={1}>
          {title}
        </TheaterTitle>
        <TheaterInfo>
          <Rating
            startingValue={stars}
            readonly
            tintColor="#000"
            imageSize={30}
          />
          <Entypo name="chevron-right" size={50} color="#fff" />
        </TheaterInfo>
        <TheaterInfoText numberOfLines={2}>{info}</TheaterInfoText>
      </TheaterDetails>
    </TheaterContainer>
  );
};

export const NearTheater: React.FC<NearTheaterProps> = ({
  location,
  data,
  handleLocation,
}) => {
  return (
    <ScrollView>
      <Container>
        <ExploreInfoText>
          What is happening around you, Theaters that are open now playing .
        </ExploreInfoText>
        {location ? (
          data?.map((item) => <MovieTheater key={item.id} {...item} />)
        ) : (
          <LocationAccesRequest handleLocation={handleLocation} />
        )}
      </Container>
    </ScrollView>
  );
};
