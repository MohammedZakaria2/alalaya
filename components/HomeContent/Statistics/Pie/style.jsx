import styled from 'styled-components';
import { colors } from './../../../theme';

export const Wrapper = styled.div`
  height: ${({ s }) => s / 16}rem;
  width: ${({ s }) => s / 16}rem;
  border-radius: 50%;
  background-color: ${({ bg }) => bg || colors.primary};
  position: relative;
  transform: rotate(45deg);
  overflow: hidden;
  /* outline: 0.35rem solid ${colors.primary}; */
  outline: 0.12rem solid ${({ bg }) => bg || colors.primary};
`;

export const Inner = styled.div`
  height: ${({ inner }) => inner / 16}rem;
  width: ${({ inner }) => inner / 16}rem;
  border-radius: 50%;
  top: ${({ deference }) => deference / 16}rem;
  right: ${({ deference }) => deference / 16}rem;
  position: absolute;
  background-color: white;
  z-index: 1;
  display: flex;
  /* align-items: center; */
  transform: rotate(-45deg);
  /* justify-content: center; */
  * {
    z-index: 2;
    margin: auto;
  }
`;

export const Percent = styled.div`
  position: absolute;
  /* z-index: 1; */
  height: ${({ times }) => times / 16}rem;
  width: ${({ times }) => times / 16}rem;
  top: -100px;
  right: ${({ percent }) => percent}px;
  transform: rotate(0deg);
  background-color: white;
  transition: all 1s ease-in-out;
`;
