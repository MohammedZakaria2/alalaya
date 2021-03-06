import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import Layout from '@/components/Layout';
import { Headings } from '@/components/Cor';
import { Wrapper } from '@/components/Cor';
const BlogContent = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`;
const Blog = () => {
  return (
    <>
      <Head>
        <title>ALALAYA | Blog</title>
        <meta
          name="description"
          content="In blog page i share my opinion and ideas about technologies by posting posts"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <BlogContent>
          <Headings.H2 p={'1rem'} weight={200} size={2} m={'auto'}>
            Content will be ready soon!!! check it out later 😎.
          </Headings.H2>
        </BlogContent>
      </Wrapper>
    </>
  );
};
Blog.layout = Layout;
export default Blog;
