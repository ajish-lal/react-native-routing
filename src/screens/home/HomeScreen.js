import React from 'react';
import { Text } from '@ui-kitten/components';
import CentreComponent from '../../components/CentreComponent';
import NavbarComponent from '../../components/NavbarComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = (props) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavbarComponent {...props} title='Home' renderRightMenu={true} />
      <CentreComponent>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
      </CentreComponent>
    </SafeAreaView>
  );
};

export default HomeScreen;