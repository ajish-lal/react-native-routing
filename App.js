import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/AppNavigator';
import { AppRoute } from './src/navigation/AppRoutes';

export default function App() {
  const isAuthorized = true;

  return (
    <Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <AppNavigator initialRouteName={isAuthorized ? AppRoute.HOME : AppRoute.AUTH} />
        </NavigationContainer>
        <StatusBar style="auto" />
      </ApplicationProvider>
    </Fragment>
  );
}
