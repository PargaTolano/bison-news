import { BehaviorSubject, Observable }              from 'rxjs';

import { handleResponse, authHeader }   from '_helpers';
import { authKey, apiURL }              from '_config';

//Singleton
export class AuthenticationService {
    
    private static instance: AuthenticationService;

    public static getInstance(): AuthenticationService {
        if (!AuthenticationService.instance) {
            AuthenticationService.instance = new AuthenticationService();
        }
        return AuthenticationService.instance;
    }

    private userSubject: BehaviorSubject<any>;

    public get user$(): Observable<any> {
        return this.userSubject.asObservable();
    }
    
    private constructor(){
        const json = localStorage.getItem( authKey );
        const data = JSON.parse( json || 'null' );

        this.userSubject = new BehaviorSubject( data );
    }

    public get user() { return this.userSubject.value; }

    public login( username : string, password : string ){

        const body = JSON.stringify({ username, password});
    
        const options ={
            method : 'POST',
            headers: authHeader(),
            body
        };

        return fetch(`${apiURL}/users/login`, options )
                .then(handleResponse)
                .then( ( res: string | any ) => {
                    const user = res.data;
                    localStorage.setItem( authKey, JSON.stringify( user ) );
                    this.user$.next( user );
                    
                    return user;
                });
    }

    public logout(){
        localStorage.removeItem( authKey );
        this.userSubject.next(null);
    }
}