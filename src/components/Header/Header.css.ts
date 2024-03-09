import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  background: ${colors.barnRed};
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  color: ${colors.lightBeige01};
  padding: 0;
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
`;
