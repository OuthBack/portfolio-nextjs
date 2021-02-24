import { type } from 'os'
import React from 'react'
import Nav from './nav'
import Tilt from 'react-tilt'
import Header from './header'
import Head from 'next/head'


export default class HeaderBackground extends React.Component{
    constructor(props: any) {
        super(props);
    } 


    componentDidMount(){

    }

    render(){ 

        function Different(props: {children: string}){
            return (
                <strong className="different-text">{props.children}</strong>
            )
        }
        
        return(
            <>
                <Header>
                    <Tilt className="Tilt" options={{
                        max : 5, 
                        scale: 1
                    }}>
                        <div className="perspective d-flex flex-column">
                            <Nav />
                            <div className="header-text container d-flex justify-content-center
                            mx-auto my-auto w-100">
                                <h1>| we make <Different>DIFFERENT.</Different></h1>
                            </div>
                        </div>
                    </Tilt>
                </Header> 
            </>
        )
    }


}


