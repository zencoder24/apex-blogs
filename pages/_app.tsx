import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { useEffect } from 'react'
import { themeChange } from 'theme-change'

function MyApp({ Component, pageProps }: AppProps) {
  
  // useEffect(() => {
  //   themeChange(false)
  // })
  return(
      <Component {...pageProps} />
  ) 
}

export default MyApp
