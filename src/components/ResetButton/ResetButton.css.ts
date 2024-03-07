import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledResetButton = styled.button`
  background: ${colors.barnRed};
  color: ${colors.lightBeige01};  
  height: 3.4rem;
  width: 14rem;
  padding: 0.8rem 1.6rem;
  margin: 1.2rem;
  border-width: 0;
  border-radius: 8px;
  color: ${colors.white};
  font-size: 1.8rem;
  padding: 0.6rem;
  cursor: pointer;

  &:hover {
    filter: brightness(125%);
  }
  &:active {
    filter: brightness(150%);
  }
`;
