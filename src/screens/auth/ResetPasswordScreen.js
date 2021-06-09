import React, { Fragment } from 'react';
import { Button, CheckBox, Layout, Text } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppRoute } from '../../navigation/AppRoutes';
import FormInputComponent from '../../components/FormInputComponent';
import { StyleSheet } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import { Formik } from 'formik';
import NavbarComponent from '../../components/NavbarComponent';

const ResetPasswordScreen = (props) => {

  const onFormSubmit = (values) => {
    navigateLogin();
  };

  const navigateLogin = () => {
    props.navigation.goBack();
  };

  const renderForm = (props) => (
    <Fragment>
      <FormInputComponent
        id='email'
        style={styles.formControl}
        placeholder='Email'
        keyboardType='email-address'
      />
      <Button
        style={styles.button}
        onPress={props.handleSubmit}>
        RESET
      </Button>
    </Fragment>
  );

  return (
    <Fragment>
      <ImageBackground
        style={styles.appBar}
        source={require('../../assets/image-background.jpeg')}>
        <NavbarComponent
          renderBack={true}
          {...props}
        />
      </ImageBackground>
      <Layout style={styles.formContainer}>
        <Formik
          initialValues={initFormValues}
          // validationSchema={ResetPasswordSchema}
          onSubmit={onFormSubmit}>
          {renderForm}
        </Formik>
      </Layout>
    </Fragment>
  );
};

const initFormValues = {
  email: ''
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
  button: {
    marginVertical: 24,
  },
});

export default ResetPasswordScreen;