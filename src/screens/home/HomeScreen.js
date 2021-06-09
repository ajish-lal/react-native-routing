import React, { Fragment } from 'react';
import { Layout, Text } from '@ui-kitten/components';
import CentreComponent from '../../components/CentreComponent';
import NavbarComponent from '../../components/NavbarComponent';

const HomeScreen = (props) => {

  return (
    <Fragment>
      <NavbarComponent title='Home' />
      <CentreComponent>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
        <Text>Home Screen</Text>
      </CentreComponent>
    </Fragment>
  );
};

export default HomeScreen;