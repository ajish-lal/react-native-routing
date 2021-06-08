import React from 'react';
import { Drawer, DrawerItem, Layout } from '@ui-kitten/components';

const HomeDrawer = (props) => {

  const onMenuItemSelect = (index) => {
    const selectedTabRoute = props.state.routeNames[index.row];
    props.navigation.navigate(selectedTabRoute);
    props.navigation.closeDrawer();
  };

  const createDrawerItemForRoute = (route, index) => {
    const { options } = props.descriptors[route.key];
    return (
      <DrawerItem
        key={index}
        title={route.name}
        accessoryLeft={options.drawerIcon}
      />
    );
  };

  return (
    <Layout>
      <Drawer
        data={props.state.routes.map(createDrawerItemForRoute)}
        onSelect={onMenuItemSelect}
      />
    </Layout>
  );
};

export default HomeDrawer;