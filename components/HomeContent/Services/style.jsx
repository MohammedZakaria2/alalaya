import styled from 'styled-components';
import { colors } from '../../theme';

export const Wrapper = styled.div`
  margin: 0 1.2rem;
`;

export const Card = styled.div`
  width: 100%;
  min-height: 14rem;
  margin-bottom: 1rem;
  background-color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 2.5rem 0;
  cursor: pointer;
  .icon {
    transition: all 0.5s ease;
  }
  &:hover {
    .icon {
      transform: scale(1.3);
    }
  }
`;
