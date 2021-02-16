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
import '../components/font-awesome'
import Head from 'next/head'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta property="og:url"                content="https://portfolio-nextjs.outhback.vercel.app" />
        <meta property="og:type"               content="website" />
        <meta property="og:title"              content="Site do Henrique 'OuthBack' Figueiredo" />
        <meta property="og:description"        content="Portfólio" />
        <meta property="og:image"              content="https://portfolio-nextjs.outhback.vercel.app/_next/image?url=%2Fimages%2Fsite-image.png&w=1920&q=75" />

        <meta name="author" content="Henrique Figueiredo" />
        <meta name="description" content="Site do OuthBack, desenvolvedor de sites e desenvolvedor Front End.
        Aqui está seu portfólio. Venha fazer seu site decolar com Henrique 'OuthBack' Figueiredo, um negócio imperdível"></meta>
        <meta name="keywords" content="sites, web, desenvolvimento, front end, react,
        html, javascript, css, website" />
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta http-equiv="content-language" content="pt-br, en-US, fr" />
        <meta name="copyright" content="© 2021 Henrique Figueiredo" />

        <link rel="canonical" href="https://portfolio-nextjs.outhback.vercel.app" />
        <meta name="robots" content="index, follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1" user-scalable="no" />
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
