import { BehaviorSubject }              from 'rxjs';

import { handleResponse, authHeader }   from '_helpers';
import { authKey, apiURL }              from '_config';

//Singleton
export class UserService {
    
    private static instance: UserService;

    public static getInstance(): UserService {
        if (!UserService.instance) {
            UserService.instance = new UserService();
        }

        return UserService.instance;
    };

    private usersSubject : BehaviorSubject<any>;

    public get users$() { return this.usersSubject.asObservable(); };

    private constructor(){
        const json = localStorage.getItem( authKey );
        const data = JSON.parse( json || 'null' );

        this.usersSubject = new BehaviorSubject( data );
    };

    public set aaaa(value : BehaviorSubject<any>){
        this.usersSubject = value;
    };

    public createUser(){
    };
}