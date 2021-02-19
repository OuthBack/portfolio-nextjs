import Image from 'next/image'
import {
    BrowserView,
    MobileView,
  } from "react-device-detect";


export default function Cinquini(){

    return(
        <>
            <BrowserView>
                <Image 
                    src="/images/cinquini.png" 
                    alt="The Cinquini's" 
                    width={1920}
                    height={10665}
                />
            </BrowserView>
            <MobileView>
                <div className="mobile-cinquini">
                    <Image 
                        src="/images/cinquini-mobile.png" 
                        alt="The Cinquini's" 
                        width={270}
                        height={10476}
                    />
                </div>
            </MobileView>
        </>
    )
}