import React,{ useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { landing } from '_config';

type NavbarProps = {
}

export const Navbar = ( props : any  ) =>{



    return (
        <header> 
            <button>
                <span></span>
            </button>

            <Link to={landing}>
                Corre Perro
            </Link>
        </header>
    );
};