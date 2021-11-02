import React from 'react';
import Head from 'next/head';
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
// own css files here
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout ? Component.layout : React.Fragment;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
