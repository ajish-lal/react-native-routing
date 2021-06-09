import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileStackNavigator } from './ProfileStackNavigator';
import { AppRoute } from './AppRoutes';
import { HomeIcon, PersonIcon } from '../assets/icons';
import HomeScreen from '../screens/home/HomeScreen';
import BottomTabBar from '../components/BottomTabBar';

const BottomTab = createBottomTabNavigator();

export const HomeBottomNavigator = () => (
    <BottomTab.Navigator tabBar={props => <BottomTabBar {...props} />}>
        <BottomTab.Screen
            name={AppRoute.HOME}
            component={HomeScreen}
            options={{ title: 'Home', tabBarIcon: HomeIcon }}
        />
        <BottomTab.Screen
            name={AppRoute.PROFILE}
            component={ProfileStackNavigator}
            options={{ title: 'Profile', tabBarIcon: PersonIcon }}
        />
    </BottomTab.Navigator>
);