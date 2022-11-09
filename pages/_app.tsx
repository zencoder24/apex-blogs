import React from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Navbar } from "../components/";
import Footer from "../components/Footer";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  //Apollo/Graphql
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_STRAPI_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class">
        <div className="">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
