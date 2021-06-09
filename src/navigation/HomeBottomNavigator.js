import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppRoute } from './AppRoutes';
import { HomeIcon, PersonIcon } from '../assets/icons';
import BottomTabBar from '../components/BottomTabBar';
import { HomeStackNavigator } from './HomeStackNavigator';
import { ProfileStackNavigator } from './ProfileStackNavigator';

const BottomTab = createBottomTabNavigator();

export const HomeBottomNavigator = () => (
    <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
        <BottomTab.Screen
            name={AppRoute.HOME}
            component={HomeStackNavigator}
            options={{ title: 'Home', tabBarIcon: HomeIcon }}
        />
        <BottomTab.Screen
            name={AppRoute.PROFILE}
            component={ProfileStackNavigator}
            options={{ title: 'Profile', tabBarIcon: PersonIcon }}
        />
    </BottomTab.Navigator>
);