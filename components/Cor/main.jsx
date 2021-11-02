import styled from 'styled-components';
import { colors, respondTo } from '../theme';

const Main = styled.div`
  display: flex;
  flex-basis: 0;
  flex-grow: 999;
  background-color: ${colors.bg};
  padding: 0;
  min-height: 100%;
  ${respondTo.lg`
  padding: 0 6.25rem 0 16rem;
  `}
`;
export default Main;
