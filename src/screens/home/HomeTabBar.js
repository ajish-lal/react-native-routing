import React from 'react';
import { TabBar, Tab, Divider, Layout } from '@ui-kitten/components';
import { MenuIcon } from '../../assets/icons';
import ToolbarComponent from '../../components/ToolbarComponent';

const HomeTabBar = (props) => {

  const onTabSelect = (index) => {
    const selectedTabRoute = props.state.routeNames[index];
    props.navigation.navigate(selectedTabRoute);
  };

  const createNavigationTabForRoute = (route) => {
    const { options } = props.descriptors[route.key];
    return (
      <Tab
        key={route.key}
        title={options.title}
        icon={options.tabBarIcon}
      />
    );
  };

  return (
    <Layout>
      <ToolbarComponent
        title='Home'
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <TabBar selectedIndex={props.state.index} onSelect={onTabSelect}>
        {props.state.routes.map(createNavigationTabForRoute)}
      </TabBar>
      <Divider />
    </Layout>
  );
};

export default HomeTabBar;