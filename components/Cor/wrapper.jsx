import styled from 'styled-components';

const Wrapper = styled.div`
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
  background: ${({ bg }) => bg || 'transparent'};
  width: ${({ w }) => w || '100%'};
  height: ${({ h }) => h || '100%'};
  box-shadow: ${({ shadow }) => shadow || 'none'};
`;
export default Wrapper;
