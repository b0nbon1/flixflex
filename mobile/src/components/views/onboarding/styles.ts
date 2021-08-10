import styled from '@emotion/native';
import ViewPager from 'react-native-pager-view';

import { ITheme } from '../../../theme';
import { Text } from '../../widgets/Text';
import { Image } from '../../widgets/Image';
import { Button } from '../../widgets/Button';
import { wp, hp, font } from '../../../utils/normalize';

export const IconImage = styled(Image)``;

export const View = styled.View<ITheme>`
  flex: 1;
  margin-horizontal: ${wp(20)}px;
`;

export const PageContent = styled.View<ITheme>`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Pager = styled(ViewPager)<ITheme>`
  flex: 1;
  background-color: #000;
`;

export const PageTitle = styled(Text)<ITheme>`
  width: ${wp(280)}px;
  margin-top: ${hp(40)}px;
  margin-bottom: ${hp(20)}px;
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  text-align: center;
`;

export const PageDescription = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  width: ${wp(286)}px;
  margin-bottom: ${hp(20)}px;
  text-align: center;
`;

export const Skip = styled(Text)<ITheme>`
  font-family: ${({ theme }) => theme.fontFamily.light};
  font-size: ${({ theme }) => theme.fontSize.xl};
  align-self: ${({ theme }) => theme.flexEnd};
  margin-top: ${hp(20)}px;
`;

export const FooterView = styled.View<ITheme>`
  align-items: ${({ theme }) => theme.flexCenter};
  flex-direction: ${({ theme }) => theme.flexRow};
  justify-content: ${({ theme }) => theme.flexBetween};
  margin-bottom: ${hp(24)}px;
`;

export const PageIndicators = styled.View<ITheme>`
  flex-direction: ${({ theme }) => theme.flexRow};
`;

export const Dot = styled.View<ITheme>`
  height: ${font(16)}px;
  width: ${font(16)}px;
  border-radius: ${font(10)}px;
  background-color: #fff;
  margin: ${font(5)}px;
`;

export const ActiveDot = styled(Dot)`
  background-color: ${({ theme }) => theme.backgroundRed};
`;

export const NextButton = styled(Button)<ITheme>`
  background-color: ${({ theme }) => theme.backgroundRed};
  align-items: center;
  justify-content: center;
  align-content: center;
  border-radius: 15px;
  height: ${hp(46)}px;
  width: ${wp(56)}px;
`;

export const StartButton = styled(Button)<ITheme>`
  background-color: ${({ theme }) => theme.backgroundRed};
  width: ${wp(247)}px;
  height: ${hp(54)}px;
  padding-horizontal: ${wp(10)}px;
  padding-vertical: ${hp(10)}px;
  align-items: center;
  align-content: center;
  justify-content: center;
  flex-direction: ${({ theme }) => theme.flexRow};
  border-radius: 8px;
  margin-top: ${hp(80)}px;
`;

export const StartedText = styled(Text)<ITheme>`
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  text-align: center;
  flex: 1;
`;
