import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import CentreComponent from '../../components/CentreComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavbarComponent from '../../components/NavbarComponent';

const AboutScreen = (props) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavbarComponent {...props} title='About' renderBack={true} />
      <CentreComponent>
        <Text>About Screen</Text>
      </CentreComponent>
    </SafeAreaView>
  );
};

export default AboutScreen;