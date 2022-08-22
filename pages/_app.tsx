import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { Navbar } from "../components/";
import Footer from "../components/Footer";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  //Apollo/Graphql
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_STRAPIGRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <ThemeProvider attribute="class">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
