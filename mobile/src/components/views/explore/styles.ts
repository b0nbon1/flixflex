import styled from '@emotion/native';

import { ITheme } from '../../../theme';
import { Button } from '../../widgets/Button';
import { Text } from '../../widgets/Text';
import { wp, hp, font } from '../../../utils/normalize';
import { Image } from '../../widgets/Image/index';

export const FlixText = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fontFamily.light};
  line-height: ${hp(27)}px;
`;

export const FlexText = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  line-height: ${hp(27)}px;
  color: ${({ theme }) => theme.textRed};
`;

export const LogoText = styled(Text)<ITheme>`
  margin-left: ${wp(16)}px;
  margin-top: ${hp(10)}px;
`;

export const ExploreText = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  text-align: center;
  margin-vertical: ${hp(30)}px;
  width: 100%;
`;

export const Container = styled.View<ITheme>`
  margin-vertical: ${hp(30)}px;
  flex: 1;
`;

export const ExploreInfoText = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  margin-horizontal: ${wp(16)}px;
  flex: 1;
`;

// Now Playing screen styles
export const HeaderTitle = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize.lg};
  margin-horizontal: ${wp(16)}px;
`;

// Join login component
export const Footer = styled.View<ITheme>`
  height: ${hp(64)}px;
  position: absolute;
  bottom: ${hp(16)}px;
  left: ${wp(10)}px;
  right: ${wp(16)}px;
`;

export const Join = styled.View<ITheme>`
  flex-direction: row;
  align-items: center;
`;

export const JContainer = styled.View<ITheme>`
  flex-direction: row;
  align-items: center;
  height: ${hp(64)}px;
  flex: 1;
  margin-left: ${wp(16)}px;
  background-color: ${({ theme }) => theme.backgroundRed};
  justify-content: space-between;
  border-radius: ${font(30)}px;
  padding-horizontal: ${hp(12)}px;
`;

export const JBtn = styled(Button)<ITheme>`
  flex-direction: row;
  align-items: center;
  height: ${hp(50)}px;
  background-color: ${({ theme }) => theme.backgroundColor};
  padding-horizontal: ${hp(10)}px;
  justify-content: space-between;
  border-radius: ${font(25)}px;
`;

export const JText = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.primaryTextColor};
  margin-left: ${wp(6)}px;
`;

// Movie Thearte styles
// location request
export const LContainer = styled.View<ITheme>`
  background-color: #4f4f4f;
  height: ${hp(230)}px;
  border-radius: ${font(30)}px;
  margin-top: ${hp(50)}px;
  margin-horizontal: ${wp(18)}px;
  padding-horizontal: ${wp(30)}px;
  padding-vertical: ${wp(21)}px;
  justify-content: space-between;
`;

export const LHeader = styled.View`
  flex-direction: row;
`;

export const LHeaderText = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  margin-left: ${wp(10)}px;
`;

export const LAllowButton = styled(Button)<ITheme>`
  background-color: ${({ theme }) => theme.backgroundRed};
  border-radius: ${font(23)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${hp(50)}px;
  width: ${wp(170)}px;
  align-self: center;
`;

export const CheckIcon = styled(Image)<ITheme>``;

export const LInfoText = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize.sm};
`;

// theaters list

export const TheaterContainer = styled.View<ITheme>`
  width: ${wp(350)}px;
  height: ${hp(140)}px;
  flex-direction: ${({ theme }) => theme.flexRow};
  justify-content: space-between;
  align-self: center;
  margin-top: ${hp(16)}px;
  margin-bottom: ${hp(30)}px;
`;

export const ImageView = styled.Image<ITheme>`
  width: 30%;
  height: ${hp(140)}px;
  border-radius: ${font(20)}px;
`;

export const TheaterDetails = styled.View<ITheme>`
  flex: 1;
  margin-left: 15px;
  // justify-content: space-between;
  margin-vertical: ${hp(10)}px;
`;

export const TheaterTitle = styled(Text)<ITheme>`
  width: 70%;
`;

export const TheaterInfo = styled.View<ITheme>`
  justify-content: space-between;
  align-items: center;
  flex-direction: ${({ theme }) => theme.flexRow};
`;

export const TheaterInfoText = styled(Text)<ITheme>`
  font-family: ${({ theme }) => theme.fontFamily.light};
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: #fff;
  width: 70%;
`;
