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
import { StyleSheet } from 'react-native';


const NavbarComponent = ({ navigation, onBackPress, ...topNavigationProps }) => {

    const [menuVisible, setMenuVisible] = React.useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const renderMenuAction = () => (
        <TopNavigationAction
            icon={MenuIcon}
            onPress={navigation.openDrawer()}
        />
    );

    const renderBackAction = () => (
        <TopNavigationAction
            icon={BackIcon}
            onPress={navigation.goBack()}
        />
    );

    const renderMoreAction = () => (
        <TopNavigationAction icon={MoreVerticalIcon} onPress={toggleMenu} />
    );

    const renderRightActions = () => (
        <React.Fragment>
            <OverflowMenu
                anchor={renderMoreAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}>
                <MenuItem accessoryLeft={InfoIcon} title='About' />
                <MenuItem accessoryLeft={LogoutIcon} title='Logout' />
            </OverflowMenu>
        </React.Fragment>
    );

    return (
        <Layout style={styles.container} level='1'>
            <TopNavigation
                {...topNavigationProps}
                subtitle='Subtitle'
                alignment='center'
                accessoryLeft={onBackPress ? renderBackAction : renderMenuAction}
                accessoryRight={renderRightActions}
            />
            <Divider />
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: 128,
    },
});

export default NavbarComponent;








    // return (
    //     <Layout style={styles.container} level='1'>
    //         <TopNavigation
    //             {...topNavigationProps}
    //             alignment='center'
    //             accessoryLeft={onBackPress && renderBackAction}
    //             accessoryRight={menu && renderMenuAction}
    //         />
    //         <Divider />
    //     </Layout>
    // );