import React, { Fragment } from 'react';
import { Button, CheckBox, Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { EyeIcon, EyeOffIcon } from '../../assets/icons';
import { AppRoute } from '../../navigation/AppRoutes';
import FormInputComponent from '../../components/FormInputComponent';
import { StyleSheet } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { Formik } from 'formik';

const LoginScreen = (props) => {

  const [shouldRemember, setShouldRemember] = React.useState(false);
  const [passwordVisible, setPasswordVisible] = React.useState(false);

  const onFormSubmit = (values) => {
    navigateHome();
  };

  const navigateHome = () => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateSignUp = () => {
    props.navigation.navigate(AppRoute.REGISTER);
  };

  const navigateResetPassword = () => {
    props.navigation.navigate(AppRoute.RESET_PASSWORD);
  };

  const onPasswordIconPress = () => {
    setPasswordVisible(!passwordVisible);
  };

  const renderForm = (props) => (
    <Fragment>
      <FormInputComponent
        id='email'
        style={styles.formControl}
        placeholder='Email'
        keyboardType='email-address'
      />
      <FormInputComponent
        id='password'
        style={styles.formControl}
        placeholder='Password'
        secureTextEntry={!passwordVisible}
        icon={passwordVisible ? EyeIcon : EyeOffIcon}
        onIconPress={onPasswordIconPress}
      />
      <Layout style={styles.resetPasswordContainer}>
        <CheckBox
          style={styles.formControl}
          checked={shouldRemember}
          onChange={setShouldRemember}
        >Remember Me</CheckBox>
        <Button
          appearance='ghost'
          status='basic'
          onPress={navigateResetPassword}>
          Forgot password?
        </Button>
      </Layout>
      <Button
        style={styles.submitButton}
        onPress={props.handleSubmit}>
        SIGN IN
      </Button>
    </Fragment>
  );

  return (
    <React.Fragment>
      <ImageBackground
        style={styles.appBar}
        source={require('../../assets/image-background.jpeg')}
      />
      <Layout style={styles.formContainer}>
        <Formik
          // initialValues={SignInData.empty()}
          // validationSchema={SignInSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
        <Button
          style={styles.noAccountButton}
          appearance='ghost'
          status='basic'
          onPress={navigateSignUp}>
          Don't have an account?
        </Button>
      </Layout>
    </React.Fragment>
  );
};

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
  submitButton: {
    marginVertical: 24,
  },
  noAccountButton: {
    alignSelf: 'center',
  },
});

export default LoginScreen;