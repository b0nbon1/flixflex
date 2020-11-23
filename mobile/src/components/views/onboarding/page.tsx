import React from 'react';
import { ImageRequireSource } from 'react-native';

import {
  View,
  Skip,
  PageContent,
  PageDescription,
  PageTitle,
  IconImage,
  StartButton,
  StartedText,
} from './styles';
import { chevronRightIcon } from '../../../assets';
import { Footer } from './footer';

interface PageProps {
  title?: string;
  Icon?: React.FC;
  skip?: boolean;
  description?: string;
  start?: boolean;
  picture?: ImageRequireSource;
  id: number;
  handlePageChange: (page: number) => void;
  handleSkip: () => void;
}

export const Page: React.FC<PageProps> = ({
  title,
  skip,
  description,
  id,
  start,
  Icon,
  picture,
  handlePageChange,
  handleSkip,
}) => {
  return (
    <View>
      {skip && <Skip onPress={() => handleSkip()}>Skip</Skip>}
      <PageContent>
        <IconImage source={picture} />
        <PageTitle>{title}</PageTitle>
        <PageDescription>{description}</PageDescription>
        {Icon && <Icon />}
        {start && (
          <StartButton>
            <StartedText>Get Started</StartedText>
            <IconImage source={chevronRightIcon} />
          </StartButton>
        )}
      </PageContent>
      {skip && <Footer active={id} handlePageChange={handlePageChange} />}
    </View>
  );
};
