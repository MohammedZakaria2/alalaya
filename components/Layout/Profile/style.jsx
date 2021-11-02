import styled from 'styled-components';
import { respondTo } from '../../theme';
import { colors } from '../../theme';

export const Wrapper = styled.div`
  /* flex-basis: 15rem; */
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  bottom: 0;
  box-shadow: rgb(47 122 249 / 10%) 4px 0px 10px;
  background-color: ${colors.white};
  width: 0rem;
  /* overflow-y: auto; */
  display: none;
  padding-bottom: 1rem;
  ${respondTo.lg`
    display: flex;
    width: 16rem;
    align-items: center;
    flex-direction: column;
  `}
`;

export const ProfilePicture = styled.div`
  margin: 1.6rem auto;
  /* width: 100%; */
  padding-top: 2rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 10rem;

  position: relative;
  border-radius: 50%;
`;

export const Dot = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background-color: green;
  position: absolute;
  bottom: 10.5rem;
  border: 2px solid #fff;
  z-index: 1;
  right: 3.8rem;
`;

export const WrapperProfilePicture = styled.div`
  position: relative;
  /* width: 10rem; */
  /* height: 100%; */
  width: 100%;
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  margin: auto;
  padding: 1rem 0;
  gap: 1rem;
  border-bottom: 0.17rem solid #80808053;
  width: 90%;
  a {
    background-color: ${colors.primary};
    width: 1.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.7rem;
    border-radius: 50%;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Details = styled.div`
  height: 100%;
  overflow-y: auto;
  width: 100%;
  padding: 1rem;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Languages = styled.div`
  padding: 1rem 0.5rem;
  border-bottom: 0.17rem solid #80808053;
`;

export const PersonalDetails = styled.div`
  padding: 0 0.5rem 1rem 0.5rem;
  border-bottom: 0.17rem solid #80808053;
`;
