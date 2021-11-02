import styled from 'styled-components';
import { colors } from '../theme';

const Btn = styled.button`
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
  background: ${({ bg }) => bg || colors.primary};
  /* width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || '100%'}; */
  box-shadow: ${({ shadow }) => shadow || 'none'};
  border: ${({ b }) => b || 'none'};
  border-radius: ${({ br }) => br || 0}rem;

  &:hover {
    color: ${({ hoverBg, bg }) => hoverBg || bg};
    opacity: 0.8;
  }
`;
export default Btn;
