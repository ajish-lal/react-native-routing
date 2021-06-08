import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './AuthNavigator';
import { AppRoute } from './AppRoutes';

const Stack = createStackNavigator();

export const AppNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
    {/* <Stack.Screen name={AppRoute.HOME} component={HomeNavigator} /> */}
  </Stack.Navigator>
);