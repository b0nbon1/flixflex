import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { OnBoarding } from '../containers/onBoarding';
import { Explore } from '../containers/explore';
import SingleMovie from '../containers/single-movie';

const Stack = createStackNavigator();

const Navigator = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Home">
        <Stack.Screen name="Home" component={OnBoarding} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="SingleMovie" component={SingleMovie} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
