import React from 'react';
import { ExploreView } from '../../components/views/explore';
import { ExploreTabs } from './navigation';

interface ExploreProps {}

export const Explore: React.FC<ExploreProps> = () => {
  return (
    <ExploreView>
      <ExploreTabs />
    </ExploreView>
  );
};
