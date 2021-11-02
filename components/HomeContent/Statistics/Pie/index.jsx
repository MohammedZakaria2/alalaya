import React from 'react';
import { Wrapper, Inner, Percent } from './style';

const Pie = ({ size, percent, children, bg }) => {
  const s = size;
  const inner = s - 20;
  const deference = (s - inner) / 2;
  const times = s * 2;
  return (
    <Wrapper bg={bg} s={s}>
      <Inner inner={inner} deference={deference}>
        {children}
      </Inner>
      <Percent times={times} percent={percent} />
    </Wrapper>
  );
};

export default Pie;
