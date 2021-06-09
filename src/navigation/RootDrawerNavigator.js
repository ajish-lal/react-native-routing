import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AppRoute } from './AppRoutes';
import { HomeIcon, InfoIcon, LogoutIcon } from '../assets/icons';
import AppDrawer from '../components/AppDrawer';
import { HomeBottomNavigator } from './HomeBottomNavigator';
import { AboutStackNavigator } from './AboutStackNavigator';
import LoginScreen from '../screens/auth/LoginScreen';

const Drawer = createDrawerNavigator();

export const RootDrawerNavigator = () => (
    <Drawer.Navigator drawerContent={props => <AppDrawer {...props} />}>
        <Drawer.Screen
            name={AppRoute.HOME}
            component={HomeBottomNavigator}
            options={{ title: AppRoute.HOME, drawerIcon: HomeIcon }}
        />
        <Drawer.Screen
            name={AppRoute.ABOUT}
            component={AboutStackNavigator}
            options={{ title: AppRoute.ABOUT, drawerIcon: InfoIcon }}
        />
        <Drawer.Screen
            name={AppRoute.LOGOUT}
            component={LoginScreen}
            options={{ title: AppRoute.LOGOUT, drawerIcon: LogoutIcon }}
        />
    </Drawer.Navigator>
);