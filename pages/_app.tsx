import React from 'react'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import {Navbar} from '../components/'
import Footer from '../components/Footer'
import { ApolloProvider } from '@apollo/client'
import { ApolloClient, gql, InMemoryCache, useQuery} from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
          uri: process.env.NEXT_PUBLIC_STRAPIGRAPHQL_ENDPOINT,
           cache: new InMemoryCache()
  })
  return(
    <ApolloProvider client={client}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </ApolloProvider>
  ) 
}

export default MyApp
