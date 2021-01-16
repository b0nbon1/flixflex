import React from 'react';

import { View, Pager } from './styles';
import { Page } from './page';
import { Background } from '../../widgets/background';
import { EasyTicket, FastTicket } from './icon-component';
import { logoBook, logoFilm, onboardLogo, perfectFilm } from '../../../assets';

interface IData {
  id: number;
  title: string;
  description: string;
  Icon?: React.FC;
  skip?: boolean;
}

interface OnBoardingViewProps {
  data: IData[];
  pagerRef: React.RefObject<any>;
  handlePageChange: (page: number) => void;
  handleSkip: () => void;
}

export const OnBoardingView: React.FC<OnBoardingViewProps> = ({
  data,
  pagerRef,
  handlePageChange,
  handleSkip,
}) => {
  return (
    <Background>
      <Pager
        orientation="horizontal"
        overScrollMode="never"
        transitionStyle="curl"
        initialPage={0}
        scrollEnabled
        ref={pagerRef}
      >
        <View key="1">
          <Page
            picture={logoBook}
            id={data[0].id}
            skip={data[0].skip}
            title={data[0].title}
            description={data[0].description}
            handlePageChange={handlePageChange}
            handleSkip={handleSkip}
          />
        </View>
        <View key="2">
          <Page
            picture={logoFilm}
            Icon={EasyTicket}
            id={data[1].id}
            skip={data[1].skip}
            title={data[1].title}
            description={data[1].description}
            handlePageChange={handlePageChange}
            handleSkip={handleSkip}
          />
        </View>
        <View key="3">
          <Page
            picture={perfectFilm}
            Icon={FastTicket}
            id={data[2].id}
            skip={data[2].skip}
            title={data[2].title}
            description={data[2].description}
            handlePageChange={handlePageChange}
            handleSkip={handleSkip}
          />
        </View>
        <View key="4">
          <Page
            picture={onboardLogo}
            id={data[3].id}
            skip={data[3].skip}
            title={data[3].title}
            description={data[3].description}
            start
            handlePageChange={handlePageChange}
            handleSkip={handleSkip}
          />
        </View>
      </Pager>
    </Background>
  );
};
