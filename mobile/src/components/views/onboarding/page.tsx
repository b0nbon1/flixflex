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
  picture?: ImageRequireSource;
  id: number;
  handlePageChange: (page: number) => void;
  handleSkip: () => void;
  handleStart?: () => void;
}

export const Page: React.FC<PageProps> = ({
  title,
  skip,
  description,
  id,
  Icon,
  picture,
  handlePageChange,
  handleSkip,
  handleStart,
}) => {
  return (
    <View>
      {skip && <Skip onPress={() => handleSkip()}>Skip</Skip>}
      <PageContent>
        <IconImage source={picture} />
        <PageTitle>{title}</PageTitle>
        <PageDescription>{description}</PageDescription>
        {Icon && <Icon />}
        {handleStart && (
          <StartButton onPress={() => handleStart()}>
            <StartedText>Get Started</StartedText>
            <IconImage source={chevronRightIcon} />
          </StartButton>
        )}
      </PageContent>
      {skip && <Footer active={id} handlePageChange={handlePageChange} />}
    </View>
  );
};
