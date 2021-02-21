import Image from 'next/image';
import { useState } from 'react';

const black = '#0c0c0c';
const white = '#ffffff';


export default function Cinquini(){

    return(
        <div>
            <div className="w-100 wrap-white">
                <div className="col-md-12 index-sites row w-100" >
                    <figure className="col">
                        <a href="./cinquini">
                            <Image 
                                src="/images/diego-studio-games.png" 
                                alt="Diego Studio Games"
                                layout="responsive"
                                width={500}
                                height={500}
                            />
                        </a> 
                    </figure>
                    <div className="col d-flex flex-column align-self-center">
                        <small>site institucional</small>
                        <h1>
                            <strong>The Cinquini's</strong>
                        </h1>
                        <small>
                            <a className="d-flex align-items-center" href="/cinquini">
                                <div>
                                    <span></span>
                                </div>
                                <b>
                                    VISUALIZAR
                                </b>
                            </a>
                        </small>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}