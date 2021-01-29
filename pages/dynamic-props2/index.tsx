import { GetStaticProps, GetServerSideProps } from 'next'
import path from 'path'
//EXECUTION ON SERVER

// called always on every page, EVEN ON PRODUCTION
/**
 * When use this, call a node server on every request
 * that means NO CACHING beneficts
 * your request you be slower to the client
 * 
 * Used for exemple in realtime Dashboard
 * 
 * Never use unless you absolute need. Try avoid
 */
export const GetServerSideProps: GetServerSideProps = async context => {
    return{
        props: {
            num: Math.random()
        }
    }
}

export default function Dynamic(props){
    return <h1>Dynamic Number: {props.myFavNum}</h1>
}