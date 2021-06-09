import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen = (props) => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout>
        <Text>Login Screen</Text>
      </Layout>
    </SafeAreaView>
  );
};

export default LoginScreen;