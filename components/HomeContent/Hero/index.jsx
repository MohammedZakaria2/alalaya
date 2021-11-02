import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { T, Btn, Headings, Flex } from '../../Cor';
import { Arrow } from '../../svg';
import { colors } from '../../theme';
import Image from 'next/image';
import { ImageContainer } from './style';

const text = {
  greeting: 'I’m Mohammed ALALAYA',
  job: 'Full-stack / Mobile Developer',
  me: 'Full-Stack Web Developer who is passionate to be successful leader in this field. Well-versed in front-end development and backend development looking forward to mastering mobile application development.',
  btn: 'HIRE ME',
};

const Hero = () => {
  return (
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
          <Btn p={`0.5rem 1.5rem`} br={0.125}>
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
  );
};

export default Hero;
