/**
 * This file is responsisable by inicialize
 * and rendering all pages. Updates the pages
 * before theyare rendered
 * 
 * Keeping state when navigating pages,
 * Inject additional data into pages,
 * 
 * Execute in Server-Side
 * 
 */

import '../styles/style.scss'
import Head from 'next/head'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" 
        crossOrigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
      
    </>
  )
}

export default MyApp
