import styled from 'styled-components';
import colors from './styles/colors';

export const AppContainer = styled.div`
  background: #403d39;
  font-family: 'Roboto', sans-serif;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const CenterSection = styled.div`
  width: 100%;
  flex: 1;
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

export const CenterLeft = styled.div`
  grid-column: 1/2;
  height: auto;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const CenterRight = styled.div`
  grid-column: 2/3;
  height: 94rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`