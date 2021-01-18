import styled from '@emotion/native';

import { ITheme } from '../../../theme';
import { Text } from '../Text';
import { Button } from '../Button';
import { wp, hp, font } from '../../../utils/normalize';

export const Container = styled.ImageBackground<ITheme>`
  width: ${wp(305)}px;
  height: ${hp(241)}px;
  position: relative;
  border-radius: ${font(50)}px;
  aspect-ratio: ${305 / 241};
`;

export const ButtonText = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: #fff;
  margin-left: ${wp(7)}px;
`;

export const TitleText = styled(Text)<ITheme>`
  color: #fff;
  margin-left: ${wp(7)}px;
`;

export const InfoText = styled(Text)<ITheme>`
  font-family: ${({ theme }) => theme.fontFamily.light};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: #fff;
  text-align: center;
  margin-vertical: ${hp(10)}px;
`;

export const BottomContainer = styled.View<ITheme>`
  position: absolute;
  bottom: ${hp(5)}px;
  left: ${wp(5)}px;
  right: ${wp(5)}px;
`;

export const ButtonContainer = styled.View<ITheme>`
  flex-direction: ${({ theme }) => theme.flexRow};
  justify-content: space-between;
  margin-bottom: ${wp(7)}px;
`;

export const TrailerButton = styled(Button)<ITheme>`
  border-radius: ${font(20)}px;
  border-bottom-left-radius: ${font(2)}px;
  background-color: #4f4f4f;
  width: ${wp(140)}px;
  height: ${hp(40)}px;
  padding-horizontal: 8px;
  flex-direction: ${({ theme }) => theme.flexRow};
  align-items: center;
`;

export const BookButton = styled(Button)<ITheme>`
  border-radius: ${font(20)}px;
  border-bottom-right-radius: ${font(2)}px;
  background-color: ${({ theme }) => theme.backgroundRed};
  flex-direction: ${({ theme }) => theme.flexRow};
  padding-horizontal: 8px;
  align-items: center;
  width: ${wp(140)}px;
  height: ${hp(40)}px;
`;

export const InfoContainer = styled.View<ITheme>`
  background-color: #222222;
  opacity: 0.8;
  border-radius: ${font(2)}px;
  border-bottom-left-radius: ${font(34)}px;
  border-bottom-right-radius: ${font(34)}px;
  padding: 5px;
`;

// vertical card styles
export const MovieContainer = styled.View<ITheme>`
  width: ${wp(350)}px;
  height: ${hp(140)}px;
  flex-direction: ${({ theme }) => theme.flexRow};
  justify-content: space-between;
  padding-horizontal: ${wp(16)}px;
  margin-vertical: ${hp(16)}px;
`;

export const ImageView = styled.Image<ITheme>`
  width: 30%;
  height: ${hp(140)}px;
  border-radius: ${font(20)}px;
`;

export const MovieDetails = styled.View<ITheme>`
  flex: 1;
  margin-left: 15px;
  justify-content: space-between;
  margin-vertical: ${hp(5)}px;
`;

export const MovieHeader = styled.View<ITheme>`
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ theme }) => theme.flexRow};
`;

export const MovieTitle = styled(Text)<ITheme>`
  width: 70%;
`;

export const MovieTags = styled.View<ITheme>`
  justify-content: space-evenly;
  align-items: center;
  flex-direction: ${({ theme }) => theme.flexRow};
`;

export const MovieTag = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

export const MovieInfo = styled.View<ITheme>`
  justify-content: space-between;
  align-content: center;
  flex-direction: ${({ theme }) => theme.flexRow};
`;

export const MovieInfoText = styled(Text)<ITheme>`
  font-family: ${({ theme }) => theme.fontFamily.light};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: #fff;
`;
