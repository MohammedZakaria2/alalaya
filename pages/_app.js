import React from 'react';
import Head from 'next/head';
// add bootstrap css
import 'bootstrap/dist/css/bootstrap.css';
// own css files here
import '../styles/globals.css';
import { positions, Provider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  position: positions.TOP_CENTER,
};

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout ? Component.layout : React.Fragment;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider template={AlertTemplate} {...options}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}

export default MyApp;
