import styled from 'styled-components';
import colors from './styles/colors';

export const AppContainer = styled.div`
  background: ${colors.black};
  font-family: 'Roboto', sans-serif;
  padding: 0 4rem;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${colors.black};
`;
