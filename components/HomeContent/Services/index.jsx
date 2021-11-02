import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Headings, T, Flex } from '../../Cor';
import { BackEnd, FrontEnd } from '../../svg';
import { colors } from '../../theme';
import { Wrapper, Card } from './style';
import * as Icon from 'react-bootstrap-icons';

export const text = {
  heading: 'I enjoy PROGRAMMING',
  subText:
    'I enjoy working on project of three types, which are the most required service in the market now a days',
};

const cards = [
  {
    id: 1,
    title: 'Front-End',
    slug: 'front-end',
    subText: 'Laravel - Node Js - Mysql',
  },
  {
    id: 2,
    title: 'Back-End',
    slug: 'back-end',
    subText: 'React Js - Next Js - Angular Js',
  },
  {
    id: 3,
    title: 'Mobile',
    slug: 'mobile',
    subText: 'React Native',
  },
];

const Services = () => {
  const renderIcon = (slug) => {
    if (slug === 'front-end') {
      return <FrontEnd />;
    } else if (slug === 'back-end') {
      return <BackEnd />;
    } else if (slug === 'mobile') {
      return <Icon.Phone size={48} color={`${colors.primary}`} />;
    }
  };

  return (
    <Wrapper>
      <Flex
        w={'100%'}
        m={`7rem 0 0 0`}
        shadow={`4px 0px 10px rgba(47, 122, 249, 0.1)`}
      >
        <Flex dr={'column'}>
          <Headings.H1 size={1.7} color={colors.darker}>
            {text.heading}
          </Headings.H1>
          <T size={0.95} m={'1rem 0 3rem 0'} text={'center'} w={70}>
            {text.subText}
          </T>
        </Flex>
      </Flex>
      <Row>
        {cards.map((item) => (
          <Col key={item.id} md={12} lg={4}>
            <Card>
              <div className="icon">{renderIcon(item.slug)}</div>
              <T
                weight={600}
                size={1.2}
                color={colors.black}
                m={'1.5rem 0 0 0 '}
                text="center"
              >
                {item.title}
              </T>
              <T m={'0.3rem 0 0 0'} size={0.8} text="center">
                {item.subText}
              </T>
            </Card>
          </Col>
        ))}
      </Row>
      <Flex
        w={'100%'}
        m={`5rem 0 0 0`}
        shadow={`4px 0px 10px rgba(47, 122, 249, 0.1)`}
      ></Flex>
    </Wrapper>
  );
};

export default Services;
