import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import CentreComponent from '../../components/CentreComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

const AboutScreen = (props) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CentreComponent>
        <Text>About Screen</Text>
      </CentreComponent>
    </SafeAreaView>
  );
};

export default AboutScreen;