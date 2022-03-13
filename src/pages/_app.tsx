/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */

import Head from "next/head";
// import { ThemeProvider } from "next-themes";
import Inspect from "inspx";
import { AppPropsWithLayout } from "../types";
import { SiteContextProvider } from "@/lib/context";
import { Header, Footer } from "@/components";

import "@/styles/app.css";

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <Inspect>
      {/* <ThemeProvider
        forcedTheme={Component.theme || undefined}
        attribute="class"
        defaultTheme="system"
      > */}
      <SiteContextProvider>
        <Head>
          <title>Cole & Mel are getting married!</title>
        </Head>

        <Header />
        {getLayout(<Component {...pageProps} />, pageProps)}
        <Footer />
      </SiteContextProvider>
      {/* </ThemeProvider> */}
    </Inspect>
  );
};

export default MyApp;
