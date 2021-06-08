import React from 'react';
import { Layout } from '@ui-kitten/components';

const CentreComponent = (props) => {

    return (
        <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {props.children}
        </Layout>
    );
};

export default CentreComponent;