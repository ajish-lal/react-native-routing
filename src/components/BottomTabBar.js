import React from 'react';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';

const BottomTabBar = ({ navigation, state, descriptors }) => {
    const createNavigationTabForRoute = (route) => {
        const { options } = descriptors[route.key];
        return (
            <BottomNavigationTab
                key={route.key}
                title={options.title}
                icon={options.tabBarIcon}
            />
        );
    };

    return (
        <BottomNavigation
            selectedIndex={state.index}
            onSelect={index => navigation.navigate(state.routeNames[index])}>
            {state.routes.map(createNavigationTabForRoute)}
        </BottomNavigation>
    )
};

export default BottomTabBar;