import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './AppRoutes';
import AboutScreen from '../screens/home/AboutScreen';

const Stack = createStackNavigator();

export const AboutStackNavigator = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name={AppRoute.ABOUT} component={AboutScreen} />
    </Stack.Navigator>
);