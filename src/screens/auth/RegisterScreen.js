import React, { Fragment } from 'react';
import { Button, CheckBox, Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppRoute } from '../../navigation/AppRoutes';
import FormInputComponent from '../../components/FormInputComponent';
import { StyleSheet } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { Formik } from 'formik';
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
      />
      <FormInputComponent
        id='username'
        style={styles.formControl}
        placeholder='Username'
      />
      <Button
        style={styles.submitButton}
        onPress={props.handleSubmit}>
        REGISTER
      </Button>
    </Fragment>
  );

  return (
    <Fragment>
      <ImageBackground
        style={styles.appBar}
        source={require('../../assets/image-background.jpeg')}>
        <NavbarComponent
          {...props}
          renderBack={true}
        />
      </ImageBackground>
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={initFormValues}
          // validationSchema={SignUpSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
        <Button
          style={styles.haveAccountButton}
          appearance='ghost'
          status='basic'
          onPress={navigateLogin}>
          Already have an account?
        </Button>
      </Layout>
    </Fragment>
  );
};

const initFormValues = {
  email: '',
  password: '',
  username: ''
}

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