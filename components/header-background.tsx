import { type } from 'os'
import { Props } from 'react'
import Nav from './nav'
import Tilt from 'react-tilt'


export default function HeaderBackground(){

    function Different(props: {children: string}){
        return (
            <strong className="different-text">{props.children}</strong>
        )
    }

    return(
        <Tilt className="Tilt" options={{
                max : 5, 
                scale: 1
            }}>
            <header >
                <div className="perspective d-flex flex-column">
                    <Nav></Nav>
                    <div className="header-text container d-flex justify-content-center
                    mx-auto my-auto w-100">
                        <h1 className="display-1">| we do <Different>DIFFERENT.</Different></h1>
                    </div>
                </div>
            </header>
        </Tilt>
    )
}
