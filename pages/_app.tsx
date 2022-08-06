import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import {Navbar} from '../components/'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </>
  ) 
}

export default MyApp
