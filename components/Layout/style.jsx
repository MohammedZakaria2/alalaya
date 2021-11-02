import styled from 'styled-components';
import { respondTo } from '../theme';
import { colors } from '../theme';

export const FlexGrid = styled.main`
  display: flex;
  align-items: stretch;
`;

export const Nav = styled.div`
  box-shadow: rgb(47 122 249 / 10%) 4px 0px 10px;
  position: fixed;
  height: 100vh;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: ${colors.white};
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 0rem;
  ${respondTo.lg`
    display: flex;
    width: 6rem;
  `}
`;
