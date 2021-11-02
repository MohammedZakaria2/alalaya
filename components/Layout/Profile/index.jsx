import React from 'react';
import Image from 'next/image';
import {
  Wrapper,
  SocialMedia,
  ProfilePicture,
  Dot,
  WrapperProfilePicture,
  Details,
  Languages,
  PersonalDetails,
} from './style';
import { Headings, Btn, T } from '@/components/Cor';
import { colors } from '@/components/theme';
import * as Icon from 'react-bootstrap-icons';
import Link from 'next/link';
import { Flex } from '@/components/Cor';
import { ProgressBar } from 'react-bootstrap';

const text = {
  download: 'Download CV',
};
const Profile = () => {
  return (
    <Wrapper>
      <WrapperProfilePicture>
        <ProfilePicture>
          <Image
            alt="profile"
            src={'/assets/images/profile.jpg'}
            height={'465'}
            width={'350'}
          />
        </ProfilePicture>
        <Dot />
        <Headings.H2 text={'center'} m={'auto'} size={1.1} weight={400}>
          Mohammed Alalaya
        </Headings.H2>

        <Headings.H2
          color={colors.darker}
          m={'1rem 0'}
          text={'center'}
          size={0.95}
          weight={300}
        >
          {'Web & Mobile Developer'}
        </Headings.H2>
        <SocialMedia>
          <Link href={'https://facebook.com'}>
            <a target="_black">
              <Icon.Linkedin size={14} color={`#fff`} />
            </a>
          </Link>

          <Link href={'https://facebook.com'}>
            <a target="_black">
              <Icon.Github size={14} color={`#fff`} />
            </a>
          </Link>

          <Link href={'https://facebook.com'}>
            <a target="_black">
              <Icon.Twitter size={14} color={`#fff`} />
            </a>
          </Link>

          <Link href={'https://facebook.com'}>
            <a target="_black">
              <Icon.EnvelopeFill size={14} color={`#fff`} />
            </a>
          </Link>
        </SocialMedia>
      </WrapperProfilePicture>

      <Details>
        <PersonalDetails>
          <Flex dr="column">
            <Flex
              m={'0.7rem 0 0.5rem 0'}
              style={{ width: '100%' }}
              justify="space-between"
            >
              <T color={colors.black} weight={300}>
                Residence:
              </T>
              <T text="right">Istanbul</T>
            </Flex>
          </Flex>
          <Flex dr="column">
            <Flex
              m={'0.7rem 0 0.5rem 0'}
              style={{ width: '100%' }}
              justify="space-between"
            >
              <T color={colors.black} weight={300}>
                Nationality:
              </T>
              <T text="right">Syrian</T>
            </Flex>
          </Flex>
          <Flex dr="column">
            <Flex
              m={'0.7rem 0 0.5rem 0'}
              style={{ width: '100%' }}
              justify="space-between"
            >
              <T color={colors.black} weight={300}>
                Age:
              </T>
              <T text="right">24</T>
            </Flex>
          </Flex>
        </PersonalDetails>

        <Languages>
          <Headings.H3 weight={300} m={'0 0 1rem 0'}>
            Languages
          </Headings.H3>
          <Flex dr="column">
            <Flex
              m={'0.7rem 0 0.5rem 0'}
              style={{ width: '100%' }}
              justify="space-between"
            >
              <T weight={300}>Arabic (native)</T>
              <T text="right">90%</T>
            </Flex>
            <ProgressBar style={{ width: '100%' }} now={90} />
          </Flex>
          <Flex dr="column">
            <Flex
              m={'0.7rem 0 0.5rem 0'}
              style={{ width: '100%' }}
              justify="space-between"
            >
              <T weight={300}>English</T>
              <T text="right">70%</T>
            </Flex>
            <ProgressBar style={{ width: '100%' }} now={70} />
          </Flex>
          <Flex dr="column">
            <Flex
              m={'0.7rem 0 0.5rem 0'}
              style={{ width: '100%' }}
              justify="space-between"
            >
              <T weight={300}>Turkish</T>
              <T text="right">70%</T>
            </Flex>
            <ProgressBar style={{ width: '100%' }} now={70} />
          </Flex>
        </Languages>
      </Details>
      <Btn p={'0.5rem 2rem'}>
        <Flex>
          <Icon.FileEarmarkPdfFill color={colors.white} size={25} />
          <T p={`0 0.5rem`} color={colors.white}>
            {text.download}
          </T>
        </Flex>
      </Btn>
    </Wrapper>
  );
};

export default Profile;
