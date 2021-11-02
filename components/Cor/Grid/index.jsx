import Link from 'next/link';
import { Span } from '@/components/Cor';
import { T, Flex } from '@/components/Cor';
import { colors } from '@/components/theme/colors';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Wrapper } from './style';

const Grid = ({ list }) => {
  return (
    <Wrapper>
      {list.map((item, index) => (
        <Row className="border-row" key={index}>
          <Col lg={12}>
            <Row>
              <Col md={12} lg={3}>
                <T
                  size={1.2}
                  p={'0 0 0.5rem 0'}
                  weight={600}
                  color={colors.darker}
                >
                  {item.unName}
                </T>
                <T size={0.8} p={'0 0 0.5rem 0'} weight={500}>
                  {item.subTitle}
                </T>
                <Flex gap={0.5} align="center" justify="flex-start">
                  {item?.demo && (
                    <Link href={item.demo}>
                      <a target="_blank">
                        <Span
                          size={0.9}
                          p={'0.1rem 1.5rem 0.2rem 1.5rem'}
                          radius={0.15}
                          bg={colors.primary}
                          color={`#fff`}
                          weight={300}
                          m={'0 0 1rem 0rem'}
                        >
                          DEMO
                        </Span>
                      </a>
                    </Link>
                  )}

                  {item?.code && (
                    <>
                      <span>{'|'}</span>
                      <Link href={item.code}>
                        <a target="_blank">
                          <Span
                            size={0.9}
                            p={'0.1rem 1.5rem 0.2rem 1.5rem'}
                            radius={0.15}
                            bg={colors.primary}
                            color={`#fff`}
                            weight={300}
                            m={'0 0 1rem 0rem'}
                          >
                            CODE
                          </Span>
                        </a>
                      </Link>
                    </>
                  )}
                </Flex>
                {item?.date && (
                  <Span
                    size={0.9}
                    p={'0.1rem 1.5rem 0.2rem 1.5rem'}
                    radius={0.15}
                    bg={colors.primary}
                    color={`#fff`}
                    weight={300}
                    m={'0 0 1rem 0rem'}
                  >
                    {item.date}
                  </Span>
                )}
                <div style={{ marginBottom: '1rem' }}></div>
              </Col>
              <Col md={12} lg={9}>
                {/* {item.description[0]} */}
                {item.description.map((line, index) => (
                  <T
                    key={index}
                    // m={'1rem 0rem'}
                    p={'0 0 0.5rem 0'}
                    weight={400}
                  >
                    {line}
                  </T>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      ))}
    </Wrapper>
  );
};

export default Grid;
