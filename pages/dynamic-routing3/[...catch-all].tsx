/**
 * Catch all routes
 * 
 * Exemple: http://localhost:3000/1/2/3/4/5/6/7/8/9/10
 * He catch all
 */

import { useRouter } from 'next/router'

export default function MyRoute(){

    const router = useRouter()

    return (
        <h1>{JSON.stringify(router.query)}</h1>
    )
}