import React from 'react';
import { Entypo } from '@expo/vector-icons';

import {
  MovieContainer,
  ImageView,
  MovieDetails,
  MovieHeader,
  MovieTitle,
  MovieTag,
  MovieInfo,
  MovieTags,
  MovieInfoText,
} from './styles';

interface VerticalCardProps {
  image: any;
  title: string;
  time: string;
  genre: string;
  year: number;
  info: string;
}

export const VerticalMovieCard: React.FC<VerticalCardProps> = ({
  image,
  title,
  time,
  year,
  genre,
  info,
}) => {
  return (
    <MovieContainer>
      <ImageView source={image} />
      <MovieDetails>
        <MovieHeader>
          <MovieTitle bold numberOfLines={1}>
            {title}
          </MovieTitle>
          <MovieTag>{time}</MovieTag>
        </MovieHeader>
        <MovieInfo>
          <MovieInfoText numberOfLines={3}>{info}</MovieInfoText>
          <Entypo name="chevron-right" size={50} color="#fff" />
        </MovieInfo>
        <MovieTags>
          <MovieTag>{genre}</MovieTag>
          <MovieTag>{year}</MovieTag>
        </MovieTags>
      </MovieDetails>
    </MovieContainer>
  );
};
