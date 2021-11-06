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
            src={'/assets/images/pp.jpg'}
            height={'350'}
            width={'350'}
          />
        </ProfilePicture>
        <Dot />
        <Headings.H2 text={'center'} m={'auto'} size={1.1} weight={400}>
          Mohammed Alalaya
        </Headings.H2>

        <Headings.H2
          color={colors.darker}
          m={'1rem 0 0.5rem 0'}
          text={'center'}
          size={0.95}
          weight={300}
        >
          {'Web & Mobile Developer'}
        </Headings.H2>
        <SocialMedia>
          <Link href={'https://www.linkedin.com/in/mohammad-al-alaya/'}>
            <a target="_black">
              <Icon.Linkedin size={14} color={`#fff`} />
            </a>
          </Link>

          <Link href={'https://github.com/MohammedZakaria2'}>
            <a target="_black">
              <Icon.Github size={14} color={`#fff`} />
            </a>
          </Link>

          <Link
            href={
              'https://twitter.com/Mo7amedZakarya?t=MziPYZTmfs4Jreu8hCoaQA&s=09'
            }
          >
            <a target="_black">
              <Icon.Twitter size={14} color={`#fff`} />
            </a>
          </Link>

          <Link href={'mailto:mohammed.alalaya@gmail.com'}>
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
              <T weight={300}>Arabic(N)</T>
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
      <div className="divider_span"></div>
      <Link href="/assets/pdf/mohammed-alalaya-resume.pdf">
        <a className="download_btn" target="_blank">
          {/* <Btn p={'0.5rem 2rem'}> */}
          <Flex>
            <Icon.FileEarmarkPdfFill color={colors.white} size={25} />
            <T p={`0 0.5rem`} color={colors.white}>
              {text.download}
            </T>
          </Flex>
          {/* </Btn> */}
        </a>
      </Link>
    </Wrapper>
  );
};

export default Profile;
