import { GetStaticPropos, GetStaticPaths } from 'next'
import path from 'path'

/**
 * Executed on server
 * 
 * Only will works if are in
 * a static page
 */
export const getStaticProps: GetStaticPropos = async (context) => {


    const fs = require('fs') // fs = filesystem
    const txt = fs.readFileSync(
        path.join(process.cwd(), 'public/robot.txt'), 'utf8')

    return {
        revalidate: 10,
        /**
         * Revalidate only work ON PRODUCTION
         * He will update every 10 seconds
         * to renew the content
         * 
         * ON PRODUCTION don't matter if you
         * trying to refresh the page, only
         * will work if the time(10 secs) over
         */
        props: {
            myFavNum: txt
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () =>{
    return{
        paths: [],
        fallback: false
    }
}

export default function Props(props){
    return <h1>Prop Number: {props.myFavNum}</h1>
}