import styled from '@emotion/native';
import { ITheme } from '../../../theme';

interface TextViewProps {
  bold?: boolean;
}

export const TextView = styled.Text<TextViewProps & ITheme>`
  font-family: ${({ theme, bold }) =>
    bold ? theme.fontFamily.bold : theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.primaryTextColor};
`;
