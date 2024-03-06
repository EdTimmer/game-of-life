import styled from 'styled-components';
import colors from '../../styles/colors';

export const HeaderContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid ${colors.prussianBlue};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  background: ${colors.prussianBlue};
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

export const IntroductionContainer = styled.div`
  width: 100%;
  padding: 1.2rem 2.4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IntroductionText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 1.8rem;
  font-weight: normal;
`;