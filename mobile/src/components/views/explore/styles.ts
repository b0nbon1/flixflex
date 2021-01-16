import styled from '@emotion/native';

import { ITheme } from '../../../theme';
import { Text } from '../../widgets/Text';
import { Image } from '../../widgets/Image';
import { Button } from '../../widgets/Button';
import { wp, hp, font } from '../../../utils/normalize';

export const FlixText = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: ${({ theme }) => theme.fontFamily.light});
  line-height: ${hp(27)};
`;

export const FlexText = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-family: ${({ theme }) => theme.fontFamily.bold});
  line-height: ${hp(27)}px;
`;

export const LogoText = styled(Text)<ITheme>`
  margin-left: ${wp(16)}px;
  margin-top: ${hp(32)}px;
`;

export const ExploreText = styled(Text)<ITheme>`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  text-align: center;
  margin-vertical: ${hp(26)}px;
  width: 100%;
`;
