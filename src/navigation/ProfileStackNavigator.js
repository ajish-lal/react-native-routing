import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './AppRoutes';
import ProfileScreen from '../screens/profile/ProfileScreen';

const Stack = createStackNavigator();

export const ProfileStackNavigator = () => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name={AppRoute.PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
);