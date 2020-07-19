import {Auth0Provider} from '@auth0/auth0-react';
import React from 'react';

import Layout from './Layout';
import Router from './Router';

const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const AUTH0_REDIRECT_URI = process.env.REACT_APP_AUTH0_REDIRECT_URI;

export default ({initialLocation}) => (
    <Auth0Provider
        domain={AUTH0_DOMAIN}
        clientId={AUTH0_CLIENT_ID}
        redirectUri={AUTH0_REDIRECT_URI}
    >
        <Layout>
            <Router initialLocation={initialLocation} />
        </Layout>
    </Auth0Provider>
);