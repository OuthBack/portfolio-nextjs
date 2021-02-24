import { useState } from 'react';


export default function Menu(){
    const [hamburguerAnimation, setHamburguerAnimation] = useState('')

    const Animation = () =>{

        if(hamburguerAnimation === ''){
            setHamburguerAnimation('animate');
        }
        else{
            setHamburguerAnimation('');
        }

    }

    return(
        <>
            <div 
                className={ "hamburguer-icon " + hamburguerAnimation } 
                onClick={ Animation } 
            >
            </div>
        </>
    )
}