import React from 'react';
import { Col, Modal, Row } from 'react-bootstrap';
import { T, Btn, Headings, Flex } from '../../Cor';
import { Arrow } from '../../svg';
import { colors } from '../../theme';
import Image from 'next/image';
import { ImageContainer } from './style';
import { ModalBody } from '@/components/Layout/Links/style';
import * as Icon from 'react-bootstrap-icons';
import ContactView from '@/components/Layout/Links/ContactView';
import { useState } from 'react';

const text = {
  greeting: 'I’m Mohammed ALALAYA',
  job: 'Full-stack / Mobile Developer',
  me: 'Full-Stack Web Developer who is passionate to be successful leader in this field. Well-versed in front-end development and backend development looking forward to mastering mobile application development.',
  btn: 'HIRE ME',
};

const Hero = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Flex
        bg={colors.white}
        h={'100%'}
        w={'100%'}
        p={`5rem 2.8rem 2.8rem 2.8rem`}
        m={`0 1.2rem`}
        shadow={`4px 0px 10px rgba(47, 122, 249, 0.1)`}
      >
        <Row>
          <Col lg={6}>
            <Headings.H1 weight={900} size={2}>
              {text.greeting}
            </Headings.H1>
            <Headings.H1
              color={colors.primary}
              m={'1.6rem 0'}
              weight={900}
              size={2.8}
            >
              {text.job}
            </Headings.H1>
            <T m={'2rem 0'} size={0.95}>
              {text.me}
            </T>
            <Btn onClick={() => setShow(true)} p={`0.5rem 1.5rem`} br={0.125}>
              <Flex>
                <T p={'0 0.5rem'} color={colors.black} size={0.95}>
                  {text.btn}
                </T>
                <Arrow />
              </Flex>
            </Btn>
          </Col>
          <Col lg={6}>
            <ImageContainer>
              <Image
                src="/assets/svg/hero.svg"
                alt="developer"
                width="1044"
                height="552"
              />
            </ImageContainer>
          </Col>
        </Row>
      </Flex>
      <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <ModalBody>
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
        </ModalBody>
      </Modal>
    </>
  );
};

export default Hero;
