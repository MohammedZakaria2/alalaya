import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import HomeContent from '@/components/HomeContent';
// import Image from 'next/image';
const Test = styled.h2`
  color: red;
`;
export default function Home() {
  return (
    <>
      <Head>
        <title>ALALAYA | Home</title>
        <meta
          name="description"
          content="i am Mohammed Alalaya and this is my portfolio"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContent />
    </>
  );
}

Home.layout = Layout;
