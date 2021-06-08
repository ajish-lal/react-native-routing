import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoute } from './AppRoutes';
import LoginScreen from '../screens/auth/LogInScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';

const Stack = createStackNavigator();

export const AuthNavigator = () => (
  <Stack.Navigator headerMode='none'>
    <Stack.Screen name={AppRoute.LOGIN} component={LoginScreen} />
    <Stack.Screen name={AppRoute.REGISTER} component={RegisterScreen} />
    <Stack.Screen name={AppRoute.RESET_PASSWORD} component={ResetPasswordScreen} />
  </Stack.Navigator>
);