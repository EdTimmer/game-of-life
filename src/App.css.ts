import styled from 'styled-components';
import colors from './styles/colors';

export const AppContainer = styled.div`
  background: ${colors.black};
  font-family: 'Roboto', sans-serif;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: ${colors.black};
`;
