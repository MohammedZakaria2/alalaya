import React from 'react';
import { Wrapper, Flex, Headings, T } from '../Cor';
import { colors } from '../theme';
import Grid from '../Cor/Grid';

const GidContent = ({ heading, subText, data }) => {
  return (
    <Wrapper>
      <Flex
        w={'100%'}
        m={`5rem 0 0 0`}
        shadow={`4px 0px 10px rgba(47, 122, 249, 0.1)`}
      >
        <Flex dr={'column'}>
          <Headings.H1 size={1.7} color={colors.darker}>
            {heading}
          </Headings.H1>
          <T size={0.95} m={'1rem 0 3rem 0'} text={'center'} w={70}>
            {subText}
          </T>
        </Flex>
      </Flex>
      <Grid list={data} />
    </Wrapper>
  );
};

export default GidContent;
