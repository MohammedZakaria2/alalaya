import { Flex } from '@/components/Cor';
import { T } from '@/components/Cor';
import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import Link from 'next/link';
import { colors } from '@/components/theme';
import { CardWrapper } from './style';
const text = {
  contactCardTitle: 'Feel free to contact me on!!',
};
const Card = ({ icon }) => {
  return (
    <>
      {/* <CardWrapper>
        <Flex gap={2} dr={'column'}>
          <Icon.Phone size={30} color={`${colors.primary}`} />
          <Link href={'tel:00905361967'}>
            <a>
              <T color={'#242526'}>+9536 065 1967</T>
            </a>
          </Link>
        </Flex>
      </CardWrapper> */}
      <CardWrapper>
        <Flex gap={2} dr={'column'}>
          <Icon.Map size={30} color={`${colors.primary}`} />
          <Link href={'https://goo.gl/maps/Gr8Uszn5dWhsrr9w5'}>
            <a target="_blank">
              <T color={'#242526'}>Turkey / Istanbul</T>
            </a>
          </Link>
        </Flex>
      </CardWrapper>
      <CardWrapper>
        <Flex gap={2} dr={'column'}>
          <Icon.Envelope size={30} color={`${colors.primary}`} />
          <Link href={'mailto:mohammed.alalaya@gmail.com'}>
            <a>
              <T color={'#242526'}>mohammed.alalaya@gmail.com</T>
            </a>
          </Link>
        </Flex>
      </CardWrapper>
    </>
  );
};

export default Card;
