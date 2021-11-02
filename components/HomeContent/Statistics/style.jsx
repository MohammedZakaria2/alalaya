import styled from 'styled-components';
import { colors } from '../../theme';

export const Wrapper = styled.div`
  margin: 1rem 1.2rem;
  background-color: ${colors.white};
  padding: 5rem 1rem;
`;

export const SkillsBars = styled.div`
  height: ${({ h }) => h || '110px'};
  overflow: hidden;
  /* transition: height 0.5s ease-in-out; */
`;

export const ProgressBarContainer = styled.div`
  margin: 1rem 0;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
`;

export const Pies = styled.div`
  flex-direction: ${({ dir }) => dir || 'row'};
  display: flex;
  align-items: ${({ align }) => align || 'flex-start'};
  justify-content: center;
  gap: ${({ gap }) => gap || 5}rem;
  flex-wrap: wrap;
  margin: ${({ m }) => m || 0};
`;

export const InnerPies = styled.div`
  max-width: 19rem;
`;
