/**
 * Catch all routes including http://localhost:3000/dynamic-routing4
 * 
 * This mean he is a index file and a [...name] file
 * 
 * Exemple: http://localhost:3000/dynamic-routing4/1/2/3/4/5/6/7/8/9/10
 * He catch all
 */

import { useRouter } from 'next/router'

export default function MyRoute(){

    const router = useRouter()

    return (
        <h1>{JSON.stringify(router.query)}</h1>
    )
}