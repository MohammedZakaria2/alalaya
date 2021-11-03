import { Btn } from '@/components/Cor';
import { Flex, T } from '@/components/Cor';
import { Contrast } from '@/components/svg';
import React from 'react';
import { Icons } from '../Links/style';
import Link from 'next/link';
import { Home } from '@/components/svg';
import { Portfolio } from '@/components/svg';
import { Cv } from '@/components/svg';
import { Blog } from '@/components/svg';
import { Contact } from '@/components/svg';
import * as Icon from 'react-bootstrap-icons';
import { colors } from '@/components/theme';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import Router from 'next/router';
const text = {
  ho: 'Home',
  edu: 'Education',
  pro: 'Projects',
  cm: 'Contact',
  bl: 'Blog',
  exp: 'Experiences',
};

const Menu = () => {
  const [, setTheme] = useState(Cookies.get('theme') || 'light');
  const router = useRouter();
  const handelTheme = () => {
    const current = Cookies.get('theme');
    if (current) {
      setTheme(current === 'light' ? 'dark' : 'light');
      Cookies.set('theme', current === 'light' ? 'dark' : 'light');
    } else {
      Cookies.set('theme', 'dark');
    }
    Router.reload();
  };
  return (
    <Flex
      style={{ height: '100vh' }}
      align={'center'}
      p={'1rem 0'}
      justify={'center'}
      dr={'column'}
    >
      <Btn br={'50'} p={'0.5rem'} bg={colors.bgDarker} onClick={handelTheme}>
        <Contrast />
      </Btn>
      <Icons>
        <Link href={'/'}>
          <a className={`link ${router.asPath === '/' && 'active'}`}>
            <span>
              <T
                size={0.8}
                weight={200}
                color={colors.primary}
                p={'0.1rem 1rem'}
              >
                {text.ho}
              </T>
            </span>
            <Home />
          </a>
        </Link>

        <Link href={'/portfolio '}>
          <a className={`link ${router.asPath === '/portfolio' && 'active'}`}>
            <span>
              <T
                size={0.8}
                weight={200}
                color={colors.primary}
                p={'0.1rem 1rem'}
              >
                {text.pro}
              </T>
            </span>
            <Portfolio />
          </a>
        </Link>
        <Link href={'/experiences'}>
          <a className={`link ${router.asPath === '/experiences' && 'active'}`}>
            <span>
              <T
                size={0.8}
                weight={200}
                color={colors.primary}
                p={'0.1rem 1rem'}
              >
                {text.exp}
              </T>
            </span>
            <Icon.AwardFill color={'#2B2B2B'} />
          </a>
        </Link>
        <Link href={'/education'}>
          <a className={`link ${router.asPath === '/education' && 'active'}`}>
            <span>
              <T
                size={0.8}
                weight={200}
                color={colors.primary}
                p={'0.1rem 1rem'}
              >
                {text.edu}
              </T>
            </span>
            <Cv />
          </a>
        </Link>

        <Link href={'/blog'}>
          <a className={`link ${router.asPath === '/blog' && 'active'}`}>
            <span>
              <T
                size={0.8}
                weight={200}
                color={colors.primary}
                p={'0.1rem 1rem'}
              >
                {text.bl}
              </T>
            </span>
            <Blog />
          </a>
        </Link>
      </Icons>
    </Flex>
  );
};

export default Menu;
