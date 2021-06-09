import React from 'react';
import { Layout } from '@ui-kitten/components';
import { SafeAreaView } from 'react-native-safe-area-context';

const CentreComponent = (props) => {

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'space-around', alignItems: 'center' }}>
            {props.children}
        </SafeAreaView>
    );
};

export default CentreComponent;