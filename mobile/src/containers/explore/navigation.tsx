import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Entypo } from '@expo/vector-icons';

import { NowPlaying } from './now-playing';
import { ComingSoon } from './coming-soon';
import { NearbyTheatre } from './near-theatre';

const Tab = createMaterialTopTabNavigator();

export function ExploreTabs(): JSX.Element {
  return (
    <Tab.Navigator
      initialRouteName="Now Playing"
      sceneContainerStyle={{ backgroundColor: '#000000' }}
      tabBarOptions={{
        activeTintColor: '#FFF',
        labelStyle: { fontSize: 13, textTransform: 'none' },
        style: { backgroundColor: '#000' },
        indicatorStyle: {
          backgroundColor: '#ff2435',
          width: '8%',
          marginLeft: '10%',
        },
        showIcon: true,
        scrollEnabled: true,
        tabStyle: {
          marginTop: 0,
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
        },
      }}
      swipeEnabled={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = '' as any;
          const color = focused ? '#ff2435' : 'white';

          if (route.name === 'Now Playing') {
            iconName = 'controller-play';
          } else if (route.name === 'Coming Soon') {
            iconName = 'back-in-time';
          } else if (route.name === 'NearBy Theather') {
            iconName = 'location';
          }

          return <Entypo name={iconName} size={24} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Now Playing" component={NowPlaying} />
      <Tab.Screen name="Coming Soon" component={ComingSoon} />
      <Tab.Screen name="NearBy Theather" component={NearbyTheatre} />
    </Tab.Navigator>
  );
}
