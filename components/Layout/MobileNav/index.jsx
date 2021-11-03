import { Btn } from '@/components/Cor';
import { Headings, T, Flex } from '@/components/Cor';
import { colors } from '@/components/theme';
import React from 'react';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import PopupProfile from './PopupProfile';
import Menu from './Menu';
import { ModalBody } from './style';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styled from 'styled-components';
import ContactView from '../Links/ContactView';

const MobileNavWrapper = styled.div`
  background-color: ${colors.white};
  display: none;
  border-top: 2px solid ${colors.dark};
  @media (max-width: 1200px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1.5rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
  }
`;
const MobileNav = () => {
  const [show, setShow] = useState(false);
  const [view, setView] = useState('');
  const router = useRouter();
  useEffect(() => {
    setShow(false);
  }, [router.asPath]);
  return (
    <>
      <MobileNavWrapper>
        <Btn
          onClick={() => {
            setView('Profile');
            setShow(true);
          }}
          //   bg={colors.dark}
          bg={'transparent'}

          //   p={'0.5rem'}
        >
          <Icon.PersonLinesFill color={colors.dark} size={30} />
        </Btn>
        <Btn
          onClick={() => {
            setView('Get In Touch');
            setShow(true);
          }}
          bg={'transparent'}
        >
          <Icon.ChatFill color={colors.dark} size={35} />
        </Btn>
        <Btn
          onClick={() => {
            setView('Menu');
            setShow(true);
          }}
          bg={'transparent'}
        >
          <Icon.ThreeDots color={colors.dark} size={30} />
        </Btn>
      </MobileNavWrapper>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <ModalBody>
          <Flex
            style={{ borderBottom: '1px solid #f4f4f4' }}
            p={'0 0 0.8rem 0'}
            justify={'space-between'}
            align={'center'}
          >
            <Headings.H1 weight={400}>{view}</Headings.H1>
            <Btn p={'0.3rem'} onClick={() => setShow(false)}>
              <Icon.ArrowReturnLeft size={20} color={'#fff'} />
            </Btn>
          </Flex>
          {view === 'Profile' && <PopupProfile />}
          {view === 'Menu' && <Menu />}
          {view === 'Get In Touch' && (
            <ContactView hide={() => setShow(false)} />
          )}
        </ModalBody>
      </Modal>
    </>
  );
};

export default MobileNav;
