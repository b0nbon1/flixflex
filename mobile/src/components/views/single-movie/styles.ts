import styled from '@emotion/native';

import { ITheme } from '../../../theme';
import { Button } from '../../widgets/Button';
import { Text } from '../../widgets/Text';
import { wp, hp, font, widthPercentageToDP } from '../../../utils/normalize';
import { Image } from '../../widgets/Image/index';
import { ImageBackground } from '../../widgets/ImageBackground';

export const Header = styled.View`
  height: ${hp(32)}px;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-left: 10px;
  margin-top: 10px;
  margin-bottom: 18px;
  elevation: 4;
`;

export const HeaderText = styled(Text)<ITheme>`
font-size: ${({ theme }) => theme.fontSize.lg};
margin-left: 10px;
`;

export const ImageBGView = styled(ImageBackground)<ITheme>`
  height: ${hp(243)}px;
  width: ${widthPercentageToDP(100).toString()}px;
  justify-content: center;
  align-items: center;
`;
