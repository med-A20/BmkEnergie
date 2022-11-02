import '../styles/global.css'
import Head from 'next/head';


export default function App(AppProps) {
  const { Component, pageProps } = AppProps;

  return (
    <>
      <Head>
        <title>BMK</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="icon" href="/vercel.svg" />
      </Head>
        <Component {...pageProps} />
    </>

  );
}