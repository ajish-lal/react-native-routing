import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import CentreComponent from '../../components/CentreComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

const ProfileScreen = (props) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CentreComponent>
        <Text>Profile Screen</Text>
      </CentreComponent>
    </SafeAreaView>
  );
};

export default ProfileScreen;