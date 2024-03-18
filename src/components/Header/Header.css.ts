import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderContainer = styled.div`
  padding: 1rem;
  margin: 0 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  color: ${colors.orangeWeb};
  padding: 0;
  margin: 0;
  font-size: 2.4rem;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
`;
