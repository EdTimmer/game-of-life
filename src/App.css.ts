import styled from 'styled-components';
import colors from './styles/colors';

export const AppContainer = styled.div`
  background: ${colors.lightBeige01};
  font-family: 'Roboto', sans-serif;
  width: 100vw;
  min-height: 100vh;
  margin: 2rem;
  display: flex;
  flex-direction: column;
`;

export const CenterSection = styled.div`
  width: 100%;
  flex: 1;
  margin-top: 2.4rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`;

export const CenterLeft = styled.div`
  flex: 2;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CenterRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`