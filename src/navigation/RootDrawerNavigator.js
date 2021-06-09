import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppRoute } from './AppRoutes';
import { HomeIcon, InfoIcon } from '../assets/icons';
import AboutScreen from '../screens/home/AboutScreen';
import AppDrawer from '../components/AppDrawer';
import { HomeBottomNavigator } from './HomeBottomNavigator';

const Drawer = createDrawerNavigator();

export const RootDrawerNavigator = () => (
    <Drawer.Navigator drawerContent={props => <AppDrawer {...props} />}>
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