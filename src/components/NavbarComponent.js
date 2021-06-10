import React from 'react';
import {
  Divider,
  Layout,
  MenuItem,
  OverflowMenu,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import { BackIcon, InfoIcon, LogoutIcon, MenuIcon, MoreVerticalIcon } from '../assets/icons';
import { AppRoute } from '../navigation/AppRoutes';

const NavbarComponent = ({ navigation, renderBack, renderRightMenu, ...topNavigationProps }) => {
  const [menuVisible, setMenuVisible] = React.useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const goTo = (route) => {
    setMenuVisible(!menuVisible);
    navigation.navigate(route);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={() => navigation.openDrawer()} />
  );

  const renderBackAction = () => (
    <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
  );

  const renderMoreAction = () => (
    <TopNavigationAction icon={MoreVerticalIcon} onPress={toggleMenu} />
  );

  const renderRightActions = () => (
    <React.Fragment>
      <OverflowMenu anchor={renderMoreAction} visible={menuVisible} onBackdropPress={toggleMenu}>
        <MenuItem accessoryLeft={InfoIcon} title="About" onPress={() => goTo(AppRoute.ABOUT)} />
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" onPress={() => goTo(AppRoute.LOGOUT)} />
      </OverflowMenu>
    </React.Fragment>
  );

  return (
    <TopNavigation
      {...topNavigationProps}
      alignment="center"
      accessoryLeft={renderBack ? renderBackAction : renderMenuAction}
      accessoryRight={renderRightMenu ? renderRightActions : null}
      appearance="control"
    />
  );
};

export default NavbarComponent;
