import React from 'react';
import {
  FooterView,
  PageIndicators,
  NextButton,
  Dot,
  ActiveDot,
  IconImage,
} from './styles';
import { chevronRightIcon } from '../../../assets';

interface footerProps {
  active: number;
  handlePageChange: (page: number) => void;
}

export const Footer: React.FC<footerProps> = ({ active, handlePageChange }) => {
  return (
    <FooterView>
      <PageIndicators>
        {Array(4)
          .fill(0)
          .map((_, i) =>
            i === active ? <ActiveDot key={i} /> : <Dot key={i} />,
          )}
      </PageIndicators>
      <NextButton onPress={() => handlePageChange(active + 1)}>
        <IconImage source={chevronRightIcon} />
      </NextButton>
    </FooterView>
  );
};
