import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { Box } from '@material-ui/core'
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';
import { oktaAuthConfig, oktaSignInConfig } from './config';
import Login from './account/Login';



//Components
import Header from './components/header/Header'
import Home from './components/home/Home'
import DetailView from './components/post/DetailView'
import CreateView from './components/post/CreateView'
import UpdateView from './components/post/UpdateView'

const oktaAuth = new OktaAuth(oktaAuthConfig);

const AppWithRouterAccess = () => {
    const history = useHistory();

    const customAuthHandler = () => {
        history.push('/login');
    };

    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };

    return (
        <Security
            oktaAuth={oktaAuth}
            onAuthRequired={customAuthHandler}
            restoreOriginalUri={restoreOriginalUri}
        >
            <SecureRoute path='/' component={Header} />
            <Box style={{ marginTop: 79 }}>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
                    <Route path='/login/callback' component={LoginCallback} />
                    <Route exact path='/details/:id' component={DetailView} />
                    <Route exact path='/create' component={CreateView} />
                    <Route exact path='/update/:id' component={UpdateView} />
                </Switch>
            </Box>
        </Security>
    )
}

export default AppWithRouterAccess
