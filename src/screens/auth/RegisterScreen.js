import React, { Fragment } from 'react';
import { Autocomplete, AutocompleteItem, Button, Layout } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppRoute } from '../../navigation/AppRoutes';
import FormComponent from '../../components/FormComponent';
import { StyleSheet } from 'react-native';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import NavbarComponent from '../../components/NavbarComponent';
import { useLocation } from '../../providers/location';
import locationList from '../../utils/location_list_updated.json';

const RegisterScreen = (props) => {
  const [value, setValue] = React.useState('');
  const [data, setData] = React.useState([]);
  const { getCurrentLocation } = useLocation();

  const onFormSubmit = (values) => {
    navigateHome();
  };

  const navigateHome = () => {
    props.navigation.navigate(AppRoute.HOME);
  };

  const navigateLogin = () => {
    props.navigation.navigate(AppRoute.LOGIN);
  };

  const clearInput = () => {
    setValue('');
    setData([]);
  };

  const onSelect = (index) => {
    setValue(data[index].city_name);
  };

  const onChangeText = (query) => {
    setValue(query);
    if (query.length > 2) {
      setData(
        locationList.filter((cityObj) =>
          cityObj.city_name.toLowerCase().startsWith(query.toLowerCase())
        )
      );
    } else {
      setData([]);
    }
  };

  return (
    <Fragment>
      <ImageBackground style={styles.appBar} source={require('../../assets/image-background.jpeg')}>
        <NavbarComponent {...props} renderBack={true} />
      </ImageBackground>
      <Layout style={styles.formContainer}>
        <FormComponent formData={formData} buttonLabel={'REGISTER'} onFormSubmit={onFormSubmit}>
          <Autocomplete
            placeholder="Search Location"
            value={value}
            onSelect={onSelect}
            onChangeText={onChangeText}
            onFocus={clearInput}
            style={{ marginVertical: 4 }}
          >
            {data.map((city, index) => (
              <AutocompleteItem key={index} title={`${city.city_name}, ${city.state_name}`} />
            ))}
          </Autocomplete>
          <Button style={{ marginVertical: 24 }} onPress={getCurrentLocation}>
            Get Location
          </Button>
        </FormComponent>
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
