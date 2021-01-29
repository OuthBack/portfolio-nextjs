import { GetStaticPropos, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import path from 'path'

/**
 * Executed on server
 * 
 * Works on dynamic page, but
 * have to use GetStaticPaths
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

/**
 * Especify when GetStaticProps will run
 * 
 * Runs at BUILD TIME. It does NOT AT RUNTIME
 * 
 * START
 * localhost:3000/dynamic-props/hello -> take the output -> store it on the disk
 * localhost:3000/dynamic-props/world -> take the output -> store it on the disk
 * DONE
 * 
 *  */
export const getStaticPaths: GetStaticPaths = async () =>{
    return{
        /**
         * When Fallback is False, the only things thats
         * will be a page are the "paths"
         */
        paths: [{ params: { name: 'hello' } }, { params: { name: 'world' } } ],
        fallback: false,

        /**
         * Exemples: 
         * localhost:3000/dynamic-props/adasdasd1adad
         * localhost:3000/dynamic-props/i23j4i23j42oi
         * 
         * Call:
         * localhost:3000/dynamic-props/i2adadada2oi -> call the getStaticProps on server
         * -> render the page -> (background) Next.js would add this to the paths list and
         * would store it locally on the filesystem for faster acess
         * 
         * Call again:
         * localhost:3000/dynamic-props/i2adadada2oi -> send the output from file stored
         * 
         * Will not be created statically create the
         * HTML on the BUILD time
         * 
         * If the fallback is true will be open to any page and
         * will not to wait the GetStaticProps finish, in other
         * words, he will serve the page, but with props empthy,
         * will fill later.
         * For this is necessary 
         */
    }
}

export default function Props(props){
    const router = useRouter()

    // To know if static props is waiting on the server
    // localhost:3000/dynamic-props/adoiaoqweioiq
    // if use paths in getStaticPaths() not work
    if(router.isFallback){
        return <h1>Loading</h1>
    }
    // ON PRODUCTION just see for the first time

    return <h1>Prop Number: {props.myFavNum}</h1>
}