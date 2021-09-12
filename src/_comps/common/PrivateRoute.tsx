import React                from 'react';
import { Route, Redirect }  from 'react-router-dom';
import querystring          from 'querystring';

import { landing, authKey } from '_config';

export const PrivateRoute = ( props : any ) => {
 
    const {component:Component, ...rest} = props;

    return (
        <>
        {
            localStorage.getItem( authKey ) !== null 
            ?
            <Route component={Component} {...rest}/>
            :
            <Redirect to={landing}/>
        }
        </>
    );
};