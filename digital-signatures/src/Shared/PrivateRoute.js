import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Authentication from '../Components/Authentication/Authentication';

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        Authentication.Authenticate === true
            ? <Component {...props} />
            : <Redirect to={
                {
                    pathname: '/',
                    state: { from: props.location }
                }
            } />
    )} />
);