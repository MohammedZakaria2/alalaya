import styled from 'styled-components';
import { colors } from '../theme';

const Span = styled.span`
  font-size: ${({ size }) => size || 1}rem;
  font-weight: ${({ weight }) => weight || 400};
  color: ${({ color }) => color || colors.gray};
  margin: ${({ m }) => m || 0};
  width: ${({ w }) => w || 100}%;
  padding: ${({ p }) => p || 0};
  background-color: ${({ bg }) => bg || 'transparent'};
  border-radius: ${({ radius }) => radius || 0}rem;
  ${({ text }) => text && `text-align: ${text};`}
`;

export default Span;
