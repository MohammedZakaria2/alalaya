import React from 'react';
import { FlexGrid } from './style';
import { Main } from '@/components/Cor';
import Links from '@/components/Layout/Links';
import { Nav } from './style';
import Footer from './Footer';
import Profile from './Profile';
import MobileNav from './MobileNav';

const Layout = ({ children }) => {
  return (
    <>
      <FlexGrid>
        <Profile />
        <Main>{children}</Main>
        <Nav>
          <Links />
        </Nav>
        <MobileNav />
      </FlexGrid>
      <Main>
        <Footer />
      </Main>
    </>
  );
};

export default Layout;
