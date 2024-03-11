import styled from 'styled-components';
import colors from '../../styles/colors';

export const CounterContainer = styled.div`
  width: 6rem;
  height: 3rem;
  border: 3px solid ${colors.orangeWeb};
  border-radius: 4px;
  background: transparent;
  color: ${colors.white};
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
