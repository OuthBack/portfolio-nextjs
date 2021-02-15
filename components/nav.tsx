import Menu from './icons-menu'
import React, { useState } from 'react'
import open from './animations/nav-menu/open'
import close from './animations/nav-menu/close'

export default function Nav(){

    const EmpthyJsx = () => {
        return(<></>)
    }

    const [nav, setNav] = useState( EmpthyJsx );

    function Li(Content:string){
        return(
            
            <li className='nav-item nav-pills px-4'>
                <a className='nav-link'>
                    <h2>{ Content }</h2>
                </a>
            </li>
        )
    }

    const Links = () => {
        return(
            <div className="vw-100 vh-100 d-flex justify-content-center align-items-center">
                <ol className="list-menu navbar-nav">
                    {Li('HOME')}
                    {Li('SOBRE MIM')}
                    {Li('SERVIÇOS')}
                    {Li('CONTATO')}
                </ol>
            </div>
        )
    }  

    function NavLinks(){

        if(typeof window === 'object'){
            
            const animation_duration = 2;
            const false_icon_hover = 0;
            const true_icon_hover = 1;
            
            
            // Click Animation
            if(!nav.props.className){
                open(animation_duration, false_icon_hover, true_icon_hover);
                
                setNav(
                    previousValue => Links()
                )
            }else{
                // Close Menu
                close(animation_duration, false_icon_hover, true_icon_hover);
                
                setTimeout(() => {
                    setNav(
                        EmpthyJsx
                    )
                }, animation_duration*1000)
            }
        }
    }

    return(
        <nav 
        className="navbar navbar-expand-sm d-flex justify-content-center mx-auto w-100">
            <div onClick={ NavLinks }>
                <Menu />
            </div>
            { nav }
        </nav>
    )
}
