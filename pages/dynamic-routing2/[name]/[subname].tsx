/**
 * Any route will use this file
 */

import { useRouter } from 'next/router'

export default function Route(){
    const router = useRouter()

    function takeMeHome(){
        router.push('/')

        /**
         * router.push('/') send to home, but when you back to
         * THIS page, she still the same
         * 
         * router.replace('/') send to home, but when you back to
         * THIS page, she changes, in other words, she refresh
         * 
         * the difference between them are in PUSH there isn't
         * refresh and in REPLACE there is a refresh
         */
    }

    return(
        <h1>
            Name: {router.query.name}
            <br/>
            Subname: {router.query.subname}
            <br/>
            <button onClick={takeMeHome}>Home</button>
        </h1>
    )
}

/**
 * http://localhost:3000/dynamic-routing2/asdaadadasdasd WORKS 
 * http://localhost:3000/dynamic-routing2/asd12312312asd WORKS
 * http://localhost:3000/dynamic-routing2/aaasdadqeq/abc WORKS
 * 
 * */ 