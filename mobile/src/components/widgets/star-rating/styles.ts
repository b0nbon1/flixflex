import styled from '@emotion/native';
import { ITheme } from '../../../theme';
import { wp, hp, font } from '../../../utils/normalize';

export const Container = styled.View<ITheme>`
  width: ${wp(150)}px;
  height: ${hp(20)}px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
