import Image from 'next/image'

export default function siteImage(){
    return(
        <>
            <Image src="/images/site-image.png" alt="site-image" layout="fill" />
        </>
    )
}
