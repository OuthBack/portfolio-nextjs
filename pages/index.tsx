import Head from 'next/head'

/**
 * Import CSS as a module
 * 
 * Essencial "import stles" and ".module.css" 
 *
 * import styles from '../styles/Home.module.css'
 * 
 * */

import Link from 'next/link'
import HeaderBackground from '../components/header-background'
import Bio from '../components/bio'
import Services from '../components/services'
import Footer from '../components/footer'
import Sites from '../components/index-sites';


export default function Home() {


  // SHOULD BE A REACT COMPONENT
  return (
    <main>
      <HeaderBackground></HeaderBackground>
      <Bio></Bio>
      <Services></Services>
      <Sites></Sites>
      <Footer></Footer>
    </main>
  )
}
