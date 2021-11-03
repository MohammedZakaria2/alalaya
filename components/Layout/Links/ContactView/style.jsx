import styled from 'styled-components';
import { colors } from './../../../theme';

export const Wrapper = styled.div`
  padding: 2rem;
`;

export const CardWrapper = styled.div`
  background-color: ${colors.bg};
  padding: 2rem;
  margin: 1rem 0;
`;

export const Input = styled.input`
  width: 100%;
  /* margin-top: 0.5rem; */
  margin-bottom: 2rem;

  /* margin-bottom: 1rem; */
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #f4f4f4;
  /* border: 1px solid ${colors.primary}; */
  color: ${colors.dark};
  font-weight: 300;
`;

export const Textarea = styled.textarea`
  width: 100%;
  font-weight: 300;
  color: ${colors.dark};
  /* margin-top: 0.5rem; */
  margin-bottom: 1.5rem;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  border: 1px solid #f4f4f4;
`;

export const FormControl = styled.div`
  position: relative;
  width: 100%;
  span {
    position: absolute;
    bottom: 0.5rem;
    left: 0;
  }
`;
