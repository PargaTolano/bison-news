import { authKey } from '_config';

export function authHeader(){

    const json = localStorage.getItem( authKey );
    const userLocal = JSON.parse( json || 'null' );

    const requestHeaders: HeadersInit = new Headers();

    if( userLocal !== null ) 
        requestHeaders.set('Authorization', `Bearer ${userLocal.token}`);

    return requestHeaders;
};