import { type } from 'os'
import React, { useContext, useState, createContext } from 'react'
import Nav from './nav'
import Tilt from 'react-tilt'
import Header from './header'
import Head from 'next/head'


export const headerTextContext = createContext(null);
export const headerTextContextUpdate = createContext(null);

export default function HeaderBackground(){
    function Different(props: {children: string}){
        return (
            <strong className="different-text">{props.children}</strong>
        )
    }

    const [Text, setText] = useState('');

    return(
        <>
            <headerTextContext.Provider value={ Text }>
                <headerTextContextUpdate.Provider value={ setText }>
                    <Header>
                        <Tilt className="Tilt" options={{
                            max : 3, 
                            scale: 1
                        }}>
                            <div className="perspective d-flex flex-column">
                                <Nav />
                                <div className={
                                    "header-text " + Text + 
                                    "container d-flex justify-content-center \
                                    mx-auto my-auto w-100" }>
                                    <h1>| we make <Different>DIFFERENT.</Different></h1>
                                </div>
                            </div>
                        </Tilt>
                    </Header> 
                </headerTextContextUpdate.Provider>
            </headerTextContext.Provider>
        </>
    )
}


