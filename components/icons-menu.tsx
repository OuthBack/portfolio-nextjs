import { useState, useContext, ReactElement } from 'react';
import { NavContext } from './nav';
import Open from './animations/nav-menu/open';
import Close from './animations/nav-menu/close';
import { headerTextContextUpdate } from './header-background';


export default function Menu(){
    const [hamburguerAnimation, setHamburguerAnimation] = useState('')
    const Menu = useContext(NavContext);
    const setHeaderText = useContext(headerTextContextUpdate);

    function open(className: string){
        setHeaderText( previousValue => className );
        setTimeout(() => {
            Menu(previousValue => Open('')); // Generate Content
            setTimeout(() => {
                Menu(previousValue => Open(className)); // Add New Class
            }, 100)
        }, 500)
    }

    function close(className: string){
        setTimeout(() => {
           Menu(previousValue => Open('')); // Add New Class
            setTimeout(() => {
                Menu(previousValue => Close()); // Generate Content
                setHeaderText(previousValue => className);
            }, 500)
        }, 0)

    }

    const Animation = () => {
        if(hamburguerAnimation === ''){
            setHamburguerAnimation( previousValue => 'animate ' );
            open('animate-left ')

        }
        else{
            setHamburguerAnimation(previousValue => '');
            close('animate-right ')
            
        }

    }

    return(
        <div 
            className={ "hamburguer-icon " + hamburguerAnimation } 
            onClick={ Animation } 
        >
        </div>
    )
}