import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { NowPlaying } from '../../components/views/explore/now-playing';

const Tab = createMaterialTopTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={NowPlaying} />
      <Tab.Screen name="Settings" component={NowPlaying} />
    </Tab.Navigator>
  );
}
