import styled from 'styled-components';
import { colors } from '../../theme';
import Link from 'next/link';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const Icons = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2.5rem;
  .contact_btn {
    &:hover {
      background-color: ${colors.primary};
    }
  }
  .active {
    background-color: ${colors.primary}!important;
    span {
      visibility: visible !important;
    }
  }
  .link {
    background-color: ${colors.bgDarker};
    padding: 0.8rem 1rem;
    position: relative;
    transition: all 0.5s ease-in-out;
    border-radius: 50%;
    &:hover {
      span {
        visibility: visible;
      }
      background-color: ${colors.primary};
    }
    span {
      transition: all 0.3s ease-in-out;
      visibility: hidden;
      border-radius: 0.16rem;
      position: absolute;
      top: -1.6rem;
      transform: translateX(-40%);
      background-color: ${colors.black};
    }
  }
`;

export const ModalBody = styled.div`
  padding: 1rem 2rem;
  background-color: ${colors.white};
`;
