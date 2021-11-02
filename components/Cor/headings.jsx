import styled from 'styled-components';
import { colors } from '../theme';

export const H1 = styled.h1`
  font-size: ${({ size }) => size || 1.5}rem;
  font-weight: ${({ weight }) => weight || 700};
  color: ${({ color }) => color || colors.black};
  margin: ${({ m }) => m || 0};
  ${({ text }) => text && `text-align: ${text};`}
  padding: ${({ p }) => p || 0};
`;

export const H2 = styled(H1)`
  font-size: ${({ size }) => size || 1.2}rem;
  font-weight: ${({ weight }) => weight || 600};
`;

export const H3 = styled(H1)`
  font-size: ${({ size }) => size || 1.1}rem;
  font-weight: ${({ weight }) => weight || 500};
`;

export const H4 = styled(H1)`
  font-size: ${({ size }) => size || 1}rem;
  font-weight: ${({ weight }) => weight || 500};
`;
