import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileNavigator } from '../navigation/ProfileNavigator';
import { AppRoute } from './AppRoutes';
import { HomeIcon, InfoIcon, PersonIcon } from '../assets/icons';
import AboutScreen from '../screens/home/AboutScreen';
import HomeTabBar from '../screens/home/HomeTabBar';
import HomeDrawer from '../screens/home/HomeDrawer';
import HomeScreen from '../screens/home/HomeScreen';

const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const HomeBottomNavigator = () => (
    <BottomTab.Navigator tabBar={props => <HomeTabBar {...props} />}>
        <BottomTab.Screen
            name={AppRoute.HOME}
            component={HomeScreen}
            options={{ title: 'Home', tabBarIcon: HomeIcon }}
        />
        <BottomTab.Screen
            name={AppRoute.PROFILE}
            component={ProfileNavigator}
            options={{ title: 'Profile', tabBarIcon: PersonIcon }}
        />
    </BottomTab.Navigator>
);

export const HomeNavigator = () => (
    <Drawer.Navigator drawerContent={props => <HomeDrawer {...props} />}>
        <Drawer.Screen
            name={AppRoute.HOME}
            component={HomeBottomNavigator}
            options={{ title: 'Home', drawerIcon: HomeIcon }}
        />
        <Drawer.Screen
            name={AppRoute.ABOUT}
            component={AboutScreen}
            options={{ title: 'About', drawerIcon: InfoIcon }}
        />
    </Drawer.Navigator>
);