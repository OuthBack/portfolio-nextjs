import Image from 'next/image'
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
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
                <main className="mobile-cinquini">
                    <Image 
                        src="/images/cinquini-mobile.png" 
                        alt="The Cinquini's" 
                        width={270}
                        height={10476}
                    />
                </main>
            </MobileView>
        </>
    )
}