import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './AppRoutes';
import HomeScreen from '../screens/home/HomeScreen';

const Stack = createStackNavigator();

export const HomeStackNavigator = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name={AppRoute.HOME} component={HomeScreen} />
    </Stack.Navigator>
);