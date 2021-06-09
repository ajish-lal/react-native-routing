import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';
import React, { Fragment } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { AppRoute } from './src/navigation/AppRoutes';

export default function App() {
  const isAuthorized = true;

  return (
    <Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <SafeAreaProvider>
          <AppNavigator initialRouteName={isAuthorized ? AppRoute.HOME : AppRoute.AUTH} />
        </SafeAreaProvider>
        <StatusBar barStyle='light-content' backgroundColor='#2980B7' />
      </ApplicationProvider>
    </Fragment>
  );
}
