import React, { Fragment } from 'react';
import { Button, Layout } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppRoute } from '../../navigation/AppRoutes';
import FormComponent from '../../components/FormComponent';
import { StyleSheet } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import NavbarComponent from '../../components/NavbarComponent';

const RegisterScreen = (props) => {
  const onFormSubmit = (values) => {
    navigateHome();
  };

  const navigateHome = () => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateLogin = () => {
    props.navigation.navigate(AppRoute.LOGIN);
  };

  const renderForm = (props) => (
    <Fragment>
      <FormComponent
        id="email"
        style={styles.formControl}
        placeholder="Email"
        keyboardType="email-address"
      />
      <FormComponent id="password" style={styles.formControl} placeholder="Password" />
      <FormComponent id="username" style={styles.formControl} placeholder="Username" />
      <Button style={styles.submitButton} onPress={props.handleSubmit}>
        REGISTER
      </Button>
    </Fragment>
  );

  return (
    <Fragment>
      <ImageBackground style={styles.appBar} source={require('../../assets/image-background.jpeg')}>
        <NavbarComponent {...props} renderBack={true} />
      </ImageBackground>
      <Layout style={styles.formContainer}>
        <FormComponent
          formData={formData}
          buttonLabel={'REGISTER'}
          onFormSubmit={onFormSubmit}
        ></FormComponent>
        <Button
          style={styles.haveAccountButton}
          appearance="ghost"
          status="basic"
          onPress={navigateLogin}
        >
          Already have an account?
        </Button>
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
  {
    name: 'password',
    defaultValue: '',
    placeholder: 'Password',
    error: 'Password must be at least 8 characters',
    rules: { required: true, minLength: 8 },
    isPassword: true,
  },
  {
    name: 'username',
    defaultValue: '',
    placeholder: 'Username',
    error: 'Username cannot be empty',
    rules: {
      required: true,
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
  submitButton: {
    marginVertical: 24,
  },
  haveAccountButton: {
    alignSelf: 'center',
  },
});

export default RegisterScreen;
