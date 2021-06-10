import React, { Fragment } from 'react';
import { Button, CheckBox, Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppRoute } from '../../navigation/AppRoutes';
import FormComponent from '../../components/FormComponent';
import { StyleSheet } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const LoginScreen = (props) => {
  const [shouldRemember, setShouldRemember] = React.useState(false);

  const onFormSubmit = (values) => {
    console.log(values);
    navigateHome();
  };

  const navigateHome = () => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateRegister = () => {
    props.navigation.navigate(AppRoute.REGISTER);
  };

  const navigateResetPassword = () => {
    props.navigation.navigate(AppRoute.RESET_PASSWORD);
  };

  return (
    <React.Fragment>
      <ImageBackground
        style={styles.appBar}
        source={require('../../assets/image-background.jpeg')}
      />
      <Layout style={styles.formContainer}>
        <FormComponent formData={formData} buttonLabel={'LOGIN'} onFormSubmit={onFormSubmit}>
          <Layout style={styles.resetPasswordContainer}>
            <CheckBox
              style={styles.formControl}
              checked={shouldRemember}
              onChange={setShouldRemember}
            >
              Remember Me
            </CheckBox>
            <Button appearance="ghost" status="basic" onPress={navigateResetPassword}>
              Forgot password?
            </Button>
          </Layout>
        </FormComponent>
        <Button
          style={styles.noAccountButton}
          appearance="ghost"
          status="basic"
          onPress={navigateRegister}
        >
          Don't have an account?
        </Button>
      </Layout>
    </React.Fragment>
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
  resetPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  formControl: {
    marginVertical: 4,
  },
  noAccountButton: {
    alignSelf: 'center',
  },
});

export default LoginScreen;
