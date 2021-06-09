import React from 'react';
import {
    Divider,
    Layout,
    OverflowMenu,
    TopNavigation,
    TopNavigationAction,
} from '@ui-kitten/components';
import { BackIcon, MoreVerticalIcon } from '../assets/icons';
import { StyleSheet } from 'react-native';


const NavbarComponent = ({ menu, menuIcon, backIcon, onBackPress, ...topNavigationProps }) => {

    const [menuVisible, setMenuVisible] = React.useState(false);

    const onMenuSelect = (index) => {
        setMenuVisible(false);
    };

    const onMenuActionPress = () => {
        setMenuVisible(!menuVisible);
    };

    const renderMenuAnchorAction = () => (
        <TopNavigationAction
            icon={menuIcon || MoreVerticalIcon}
            onPress={onMenuActionPress}
        />
    );

    const renderMenuAction = () => (
        <OverflowMenu
            visible={menuVisible}
            anchor={renderMenuAnchorAction}
            placement='bottom end'
            onSelect={onMenuSelect}
            onBackdropPress={onMenuActionPress}>
            {menu()}
        </OverflowMenu>
    );

    const renderBackAction = () => (
        <TopNavigationAction
            icon={backIcon || BackIcon}
            onPress={onBackPress}
        />
    );

    return (
        <Layout style={styles.container} level='1'>
            <TopNavigation
                {...topNavigationProps}
                alignment='center'
                accessoryLeft={onBackPress && renderBackAction}
                accessoryRight={menu && renderMenuAction}
            />
            <Divider />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },
});

export default NavbarComponent;