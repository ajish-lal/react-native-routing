import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterScreen = (props) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout>
        <Text>Register Screen</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default RegisterScreen;