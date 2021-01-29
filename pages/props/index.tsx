import { GetStaticPropos } from 'next'
import path from 'path'

// Executed on server
export const getStaticProps: GetStaticPropos = async (context) => {


    const fs = require('fs')
    const txt = fs.readFileSync(
        path.join(process.cwd(), 'public/robot.txt'), 'utf8')

    return {
        props: {
            myFavNum: txt
        }
    }
}

export default function Props(props){
    return <h1>Prop Number: {props.myFavNum}</h1>
}