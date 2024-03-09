import styled from 'styled-components';
import colors from '../../styles/colors';

export const StyledButton = styled.button`
  background: ${colors.prussianBlue};
  border: 2px solid white;
  color: ${colors.lightBeige01};  
  height: 14rem;
  width: 14rem;
  padding: 0.8rem 1.6rem;
  margin: 1.2rem;
  border-radius: 100rem;
  color: ${colors.white};
  font-size: 1.8rem;
  padding: 0.6rem;
  cursor: 'pointer';

  &:hover {
    filter: brightness(125%);
  }
  &:active {
    filter: brightness(150%);
  }
`;
