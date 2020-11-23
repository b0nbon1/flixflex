import styled from '@emotion/native';
import { ITheme } from '../../../theme';

export const BackgroundView = styled.SafeAreaView<ITheme>`
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundColor};
`;
