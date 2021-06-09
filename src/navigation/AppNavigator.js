import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from './AuthNavigator';
import { AppRoute } from './AppRoutes';
import { RootDrawerNavigator } from './RootDrawerNavigator';

const Stack = createStackNavigator();

export const AppNavigator = (props) => (
  <Stack.Navigator {...props}>
    <Stack.Screen name={AppRoute.AUTH} component={AuthNavigator} />
    <Stack.Screen name={AppRoute.HOME} component={RootDrawerNavigator} />
  </Stack.Navigator>
);