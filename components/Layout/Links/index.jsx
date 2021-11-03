import React, { useState } from 'react';
import { Wrapper, Icons, Tooltip } from './style';
import Cookies from 'js-cookie';
import Link from 'next/link';
import { Btn } from '@/components/Cor';
import { colors } from '@/components/theme/colors';
import { Contact, Contrast, Home, Cv, Portfolio, Blog } from '@/components/svg';
import { T } from '@/components/Cor';
import { useRouter } from 'next/router';
import * as Icon from 'react-bootstrap-icons';
import { Modal } from 'react-bootstrap';
import { Flex } from '@/components/Cor';
import { Headings } from '@/components/Cor';
import ContactView from './ContactView';

const text = {
  ho: 'Home',
  edu: 'Education',
  pro: 'Projects',
  cm: 'Contact',
  bl: 'Blog',
  exp: 'Experiences',
};

const Links = () => {
  const [, setTheme] = useState(Cookies.get('theme') || 'light');
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handelTheme = () => {
    const current = Cookies.get('theme');
    if (current) {
      setTheme(current === 'light' ? 'dark' : 'light');
      Cookies.set('theme', current === 'light' ? 'dark' : 'light');
    } else {
      Cookies.set('theme', 'dark');
    }
    location.reload();
  };

  return (
    <>
      <Wrapper>
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
            <a
              className={`link ${router.asPath === '/experiences' && 'active'}`}
            >
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
              <Icon.AwardFill color={colors.black} />
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

          <Btn
            className="contact_btn"
            p={'0.8rem 1rem'}
            bg={colors.bgDarker}
            br={'50'}
            onClick={() => setShow(true)}
          >
            <Contact />
          </Btn>
        </Icons>
      </Wrapper>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Body>
          <Flex
            style={{ borderBottom: '1px solid #f4f4f4' }}
            p={'0 0 0.8rem 0'}
            justify={'space-between'}
            align={'center'}
          >
            <Headings.H1 weight={400}>Get In touch</Headings.H1>
            <Btn p={'0.3rem'} onClick={() => setShow(false)}>
              <Icon.ArrowReturnLeft size={20} color={'#fff'} />
            </Btn>
          </Flex>
          <ContactView hide={() => setShow(false)} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Links;
