import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${({ dr }) => dr || 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
  gap: ${({ gap }) => gap || 0}rem;
  background-color: ${({ bg }) => bg || 'transparent'};
`;

export default Flex;
