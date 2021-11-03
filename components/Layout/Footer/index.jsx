import React from 'react';
import { CopyRights, Wrapper, SocialIcons, Icons } from './style';
import { colors } from '@/components/theme';
import * as Icon from 'react-bootstrap-icons';
import Link from 'next/link';
import { T } from '@/components/Cor';

const Footer = () => {
  return (
    <Wrapper>
      <SocialIcons>
        <Icons justify={'space-around'}>
          {/* <Link href={'https://facebook.com'}>
            <a target="_black">
              <Icon.Facebook size={25} color={`${colors.white}`} />
            </a>
          </Link> */}
          <Link href={'https://www.linkedin.com/in/mohammad-al-alaya/'}>
            <a target="_black">
              <Icon.Linkedin size={25} color={`${colors.white}`} />
            </a>
          </Link>

          <Link href={'https://github.com/MohammedZakaria2'}>
            <a target="_black">
              <Icon.Github size={25} color={`${colors.white}`} />
            </a>
          </Link>

          <Link
            href={
              'https://twitter.com/Mo7amedZakarya?t=MziPYZTmfs4Jreu8hCoaQA&s=09'
            }
          >
            <a target="_black">
              <Icon.Twitter size={25} color={`${colors.white}`} />
            </a>
          </Link>

          <Link href={'mailto:mohammed.alalaya@gmail.com'}>
            <a target="_black">
              <Icon.EnvelopeFill size={25} color={`${colors.white}`} />
            </a>
          </Link>
          {/* <Link href={'https://facebook.com'}>
            <a target="_black">
              <Icon.Whatsapp size={25} color={`${colors.white}`} />
            </a>
          </Link> */}
        </Icons>
      </SocialIcons>
      <CopyRights>
        <T size={0.82} color={colors.white}>
          &#169; Copyrights: Mohammed Alalaya 😎
        </T>
      </CopyRights>
    </Wrapper>
  );
};

export default Footer;
