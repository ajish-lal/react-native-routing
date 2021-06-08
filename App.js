import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
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
