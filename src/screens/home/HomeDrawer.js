import React, { Fragment } from 'react';
import { Divider, Drawer, DrawerItem, IndexPath } from '@ui-kitten/components';
import { HomeIcon, BellIcon, ForwardIcon } from '../../assets/icons';
import { ImageBackground, StyleSheet } from 'react-native';

const HomeDrawer = ({ navigation, state }) => {

  return (
    <Drawer
      header={Header}
      selectedIndex={new IndexPath(state.index)}
      onSelect={index => navigation.navigate(state.routeNames[index.row])}>
      <DrawerItem
        title='Home'
        accessoryLeft={HomeIcon}
        accessoryRight={ForwardIcon}
      />
      <DrawerItem
        title='Notification'
        accessoryLeft={BellIcon}
        accessoryRight={ForwardIcon}
      />
    </Drawer>
  );
};

const Header = (props) => (
  <Fragment>
    <ImageBackground
      style={[props.style, styles.header]}
      source={require('../../assets/icon.png')}
    />
    <Divider />
  </Fragment>
);

const styles = StyleSheet.create({
  header: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeDrawer;