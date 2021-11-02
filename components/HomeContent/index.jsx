import React from 'react';
import { Wrapper } from '../Cor';
import Hero from './Hero';
import Services from './Services';
import Statistics from './Statistics';

const HomeContent = () => {
  return (
    <Wrapper>
      <Hero />
      <Services />
      <Statistics />
    </Wrapper>
  );
};

export default HomeContent;
