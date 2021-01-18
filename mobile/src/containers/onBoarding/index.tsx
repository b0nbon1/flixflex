import React, { useRef } from 'react';

import { OnBoardingView } from '../../components/views/onboarding';

interface OnBoardingProps {
  navigation: any;
}

const data = [
  {
    title: 'Book movies with flixflex',
    description:
      'Flixflex will be a one-stop-shop regarding cinema tickets. It allows you to be able to view movies showing in the cinemas near you, reserve a seat and instantly pay for the ticket from the comfort of your home',
    id: 0,
    skip: true,
  },
  {
    title: 'Easy ticket booking',
    description:
      'Select a movie of your choice and cinema theatre that you want to watch from the comfort of your home. Also Book your preferred seats.',
    id: 1,
    skip: true,
  },
  {
    title: 'Fast, easy and secure',
    description:
      'Make secure payments easily while purchasing tickets. Supports mobile money, paypal and bank payments.',
    id: 2,
    skip: true,
  },
  {
    title: ' Easy explore',
    description:
      'Explore Movies and also watch their trailers without moving out of this app',
    id: 3,
    skip: false,
  },
];

export const OnBoarding: React.FC<OnBoardingProps> = ({ navigation }) => {
  const pagerRef = useRef<any>(null);
  const handlePageChange = (pageNumber: number) => {
    pagerRef.current.setPage(pageNumber);
  };
  const handleSkip = () => {
    pagerRef.current.setPage(3);
  };
  const handleStart = () => {
    navigation.navigate('Explore');
  };
  return (
    <OnBoardingView
      handleSkip={handleSkip}
      data={data}
      pagerRef={pagerRef}
      handlePageChange={handlePageChange}
      handleStart={handleStart}
    />
  );
};
