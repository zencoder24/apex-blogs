import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    themeChange(false)
  })
  return(
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
