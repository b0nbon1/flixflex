import React, { memo } from 'react'
import { ViewStyle } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { Container } from "./styles";
import { font } from '../../../utils/normalize';

export interface StarRatingViewProps {
  starCount: number;
  totalStars: number;
  height: number;
  style?: ViewStyle;
};

export interface StarProps {
  icon: "star-sharp" | "star-half-sharp";
  color: string;
}

const STAR_COUNT = 5;

const StarRatingView = (props: StarRatingViewProps) => {
  const { starCount, totalStars, style, height } = props;
  const scale = totalStars / STAR_COUNT;
  let yellowStarCount = ~~(starCount / scale);
  const dif = (starCount/scale) - yellowStarCount
  let halfStarCount = 0;
  let grayStarCount = STAR_COUNT - yellowStarCount;
  if (0 <= dif && dif < 0.3) {
  } else if (0.3 <= dif && dif < 0.8) {
    halfStarCount = 1;
    grayStarCount = grayStarCount - 1;
  } else if (dif >= 0.8) {
    yellowStarCount = yellowStarCount + 1;
    grayStarCount = grayStarCount - 1;
  }

  const starHeight = height || 30;
  const Star = ({icon, color}: StarProps) => (
    <Ionicons name={icon} size={Number(font(starHeight))} color={color} />
  );
  return (
    <Container style={[style]}>
        {Array(yellowStarCount).fill("").map((e, i) => <Star key={i.toString()} icon="star-sharp" color="#FFCE31" />)}
        {Array(halfStarCount).fill("").map((e, i) => <Star key={i.toString()} icon="star-half-sharp" color="#FFCE31" />)}
        {Array(grayStarCount).fill("").map((e, i) => <Star key={i.toString()} icon="star-sharp"color="#f7f0ed" />)}
      </Container>
  )
}

export default memo(StarRatingView);
