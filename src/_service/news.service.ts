import { BehaviorSubject, Observable }              from 'rxjs';

import { handleResponse, authHeader }   from '_helpers';
import { authKey, apiURL }              from '_config';

import { CreateNewsModel } from '_model';

//Singleton
export class NewsService {
    
    private static instance: NewsService;

    public static getInstance(): NewsService {
        if (!NewsService.instance) {
            NewsService.instance = new NewsService();
        }

        return NewsService.instance;
    };

    private constructor(){
    };

    public get() :  Observable<any>{
        const newsBehaviorSubject = new BehaviorSubject({});

        const options ={
            headers: authHeader()
        };

        fetch(`${apiURL}/news/get`, options )
        .then( handleResponse )
        .then( res =>{
            if( typeof res !== 'object'){
                console.warn(res);
                return;
            }

            const { data } = res;
            newsBehaviorSubject.next(data);
        })
        .catch(console.warn);


        return newsBehaviorSubject.asObservable();
    };

    public getById( id : string ) :  Observable<any>  {
        const newsBehaviorSubject = new BehaviorSubject({});

        const options ={
            headers: authHeader()
        };

        fetch(`${apiURL}/news/getId/${id}`, options )
        .then( handleResponse )
        .then( res =>{
            if( typeof res !== 'object'){
                console.warn(res);
                return;
            }

            const { data } = res;
            newsBehaviorSubject.next(data);
        })
        .catch(console.warn);


        return newsBehaviorSubject.asObservable();
    }

    public search ( query: string ) : Observable<any>{
        const newsBehaviorSubject = new BehaviorSubject({});

        const options ={
            method : 'GET',
            headers: authHeader()
        };

        const url = new URL(`${apiURL}/news/search`);
        url.searchParams.append('query', query);

        fetch( url.href, options )
        .then( handleResponse )
        .then( ( { data } ) => newsBehaviorSubject.next(data) )
        .catch(console.warn);

        return newsBehaviorSubject.asObservable();
    }

    public getByCategoria( categoryId: string ) : Observable<any>{
        const newsBehaviorSubject = new BehaviorSubject({});

        const options ={
            headers: authHeader()
        };

        const url = new URL(`${apiURL}/news/getCategoria`);
        url.searchParams.append('category', categoryId);

        fetch( url.href, options )
        .then( handleResponse )
        .then( ( { data } ) => newsBehaviorSubject.next(data) )
        .catch(console.warn);

        return newsBehaviorSubject.asObservable();
    }

    public getPopular( categoryId: string) : Observable<any>{
        const newsBehaviorSubject = new BehaviorSubject({});

        const options ={
            headers: authHeader()
        };

        const url = new URL(`${apiURL}/news/getCategoria`);
        url.searchParams.append('category', categoryId);

        fetch( url.href, options )
        .then( handleResponse )
        .then( ( { data } ) => newsBehaviorSubject.next(data) )
        .catch(console.warn);

        return newsBehaviorSubject.asObservable();
    }

    public create( createNewsModel : CreateNewsModel ) : Observable<any> {
        const newsBehaviorSubject = new BehaviorSubject({});

        const headers = authHeader();
        headers.append('Content-Type', 'application/json');

        const body = JSON.stringify( createNewsModel );

        const options ={
            method: 'POST',
            headers,
            body
        };

        fetch( `${apiURL}/news/create`, options )
        .then( handleResponse )
        .then( ( { data } ) => newsBehaviorSubject.next(data) )
        .catch(console.warn);

        return newsBehaviorSubject.asObservable();
    }
}