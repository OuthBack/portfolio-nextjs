import Menu from './icons-menu'
import React, { useState, createContext, ReactElement } from 'react'
import Open from './animations/nav-menu/open'
import Close from './animations/nav-menu/close'



export const NavContext = createContext(null);

export default function Nav(){

    const [nav, setNav] = useState<ReactElement>( Close() );


    return(
        <NavContext.Provider value={ setNav }>
            <nav 
            className="navbar navbar-expand-sm d-flex justify-content-center mx-auto w-100">
                <Menu />
                { nav }
            </nav>
        </NavContext.Provider>
        
    )
}
