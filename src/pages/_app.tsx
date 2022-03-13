/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

import Head from "next/head";
// import { ThemeProvider } from "next-themes";

import { AppPropsWithLayout } from "../types";
import { SiteContextProvider } from "@/lib/context";
import { Header } from "@/components";

import "@/styles/app.css";

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);
  {
    /* 
      <Inspect><ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute="class"
        defaultTheme="system"
      > */
  }
  {
    /* </ThemeProvider></Inspect> */
  }
  return (
    <SiteContextProvider>
      <Head>
        <title>Cole & Mel are getting married!</title>
      </Head>

      <Header />
      {getLayout(<Component {...pageProps} />, pageProps)}
      {/* <Footer /> */}
    </SiteContextProvider>
  );
};

export default MyApp;
