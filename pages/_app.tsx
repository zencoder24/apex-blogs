import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Navbar } from "../components/";
import Footer from "../components/Footer";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, gql, InMemoryCache, useQuery } from "@apollo/client";
import { themeChange } from "theme-change";

function MyApp({ Component, pageProps }: AppProps) {
  //Apollo/Graphql
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_STRAPIGRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  //Daisy UI Theme
  const themeValues = ["mydarktheme", "mylighttheme"];

  useEffect(() => {
    themeChange(false);
  });

  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;
