import hostConfig from '_config/host.json';

const landing   = `${hostConfig.basePath}/`;
const post      = `${hostConfig.basePath}/post/:id`;
const search    = `${hostConfig.basePath}/search/:query`;
const users     = `${hostConfig.basePath}/users`;
const profile   = `${hostConfig.basePath}/profile/:id`;
const myposts   = `${hostConfig.basePath}/myposts`;
const login     = `${hostConfig.basePath}/login`;
const signup    = `${hostConfig.basePath}/signup`;

const getPost   = ( id : String | Number ) => 
                        `${hostConfig.basePath}/post/${id}`;
const getSearch = ( query : String ) => 
                        `${hostConfig.basePath}/search/${query}`;
const getProfile = ( id : String | Number )=> 
                        `${hostConfig.basePath}/profile/${id}`;

export {
    landing   ,
    post      ,
    search    ,
    users     ,
    profile   ,
    myposts   ,
    login     ,
    signup    ,
    getPost   ,
    getSearch ,
    getProfile
};