import React, { Fragment } from 'react';
import { Layout } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormComponent from '../../components/FormComponent';
import { StyleSheet } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import NavbarComponent from '../../components/NavbarComponent';

const ResetPasswordScreen = (props) => {
  const onFormSubmit = (values) => {
    navigateLogin();
  };

  const navigateLogin = () => {
    props.navigation.goBack();
  };

  return (
    <Fragment>
      <ImageBackground style={styles.appBar} source={require('../../assets/image-background.jpeg')}>
        <NavbarComponent renderBack={true} {...props} />
      </ImageBackground>
      <Layout style={styles.formContainer}>
        <FormComponent
          formData={formData}
          buttonLabel={'RESET'}
          onFormSubmit={onFormSubmit}
        ></FormComponent>
      </Layout>
    </Fragment>
  );
};

const formData = [
  {
    name: 'email',
    defaultValue: '',
    placeholder: 'Email',
    keyboardType: 'email-address',
    error: 'Invalid email',
    rules: {
      required: true,
      pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z]+\.[a-zA-Z]+$/,
    },
  },
];

const styles = StyleSheet.create({
  appBar: {
    height: 192,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  formControl: {
    marginVertical: 4,
  },
  button: {
    marginVertical: 24,
  },
});

export default ResetPasswordScreen;
