import React from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';

import {
  Container,
  BottomContainer,
  ButtonContainer,
  TrailerButton,
  BookButton,
  InfoContainer,
  ButtonText,
  InfoText,
  TitleText,
} from './styles';

export interface MoviceCardProps {
  image: any;
  trailerLink?: string;
  title: string;
  time: string;
  genre: string;
  year: number;
  comingSoon?: boolean;
}

export const MovieCard: React.FC<MoviceCardProps> = ({
  image,
  time,
  genre,
  year,
  title,
  comingSoon,
}) => {
  return (
    <Container source={image} imageStyle={{ borderRadius: 30 }}>
      <BottomContainer>
        <ButtonContainer>
          <TrailerButton>
            <Ionicons name="play-circle-outline" size={24} color="#ff2435" />
            <ButtonText>Watch Trailer</ButtonText>
          </TrailerButton>
          <BookButton>
            {comingSoon ? (
              <>
                <Entypo name="bell" size={24} color="#fff" />
                <ButtonText>Notify</ButtonText>
              </>
            ) : (
              <>
                <Entypo name="video" size={22} color="#fff" />
                <ButtonText>Going - Book</ButtonText>
              </>
            )}
          </BookButton>
        </ButtonContainer>
        <InfoContainer>
          <TitleText>{title}</TitleText>
          <InfoText>
            {time} | {genre} | {year}
          </InfoText>
        </InfoContainer>
      </BottomContainer>
    </Container>
  );
};
