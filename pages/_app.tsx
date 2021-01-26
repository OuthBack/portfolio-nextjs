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

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
