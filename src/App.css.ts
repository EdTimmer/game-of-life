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

export const CenterSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
