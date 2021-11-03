import styled from 'styled-components';
import { colors } from '../../theme';
import { respondTo } from '../../theme';
export const Wrapper = styled.footer`
  width: 100%;
  margin-bottom: 3.125rem;
  padding: 0;
  ${respondTo.lg`
  padding: 0 6.25rem 0 16rem;
  margin-bottom: 0rem;
  `}
  background-color: #6b6b6b;
`;
export const SocialIcons = styled.div`
  padding: 1rem;
  width: 40%;
  margin: auto;
  @media (max-width: 1200px) {
    width: 70%;
  }
  a {
    transition: all 0.5s ease;
    background-color: ${colors.primary};
    padding: 0.8rem;
    border-radius: 0.3rem;
    &:hover {
      background-color: ${colors.darker};
      /* transform: scale(1.1); */
    }
  }
`;
export const CopyRights = styled.div`
  width: 100%;
  padding: 1rem 0.9rem;
  background-color: ${colors.darker};
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  flex-wrap: wrap;
`;
