import React, { Fragment } from 'react';
import { Divider, Drawer, DrawerItem, IndexPath } from '@ui-kitten/components';
import { ForwardIcon } from '../assets/icons';
import { ImageBackground, StyleSheet } from 'react-native';

const AppDrawer = ({ navigation, state, descriptors }) => {

    const createDrawerItemForRoute = (route, index) => {
        const { options } = descriptors[route.key];
        return (
            <DrawerItem
                key={index}
                title={route.name}
                accessoryLeft={options.drawerIcon}
                accessoryRight={ForwardIcon}
            />
        );
    };

    return (
        <Drawer
            header={Header}
            selectedIndex={new IndexPath(state.index)}
            onSelect={index => navigation.navigate(state.routeNames[index.row])}>
            {state.routes.map(createDrawerItemForRoute)}
        </Drawer>
    );
};

const Header = (props) => (
    <Fragment>
        <ImageBackground
            style={[props.style, styles.header]}
            source={require('../assets/icon.png')}
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

export default AppDrawer;