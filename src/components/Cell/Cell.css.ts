import styled from 'styled-components';
import colors from '../../styles/colors';

interface CellContainerProps {
	$isAlive: boolean,
}

export const CellContainer = styled.div<CellContainerProps>`
  width: 1.6rem;
  aspect-ratio: 1;
  border: 1px solid ${colors.black};
  /* border: 1px solid ${colors.oxfordBlue}; */
  background-color: ${({ $isAlive }) => ($isAlive ? `${colors.orangeWeb}` : `${colors.oxfordBlue}`)};
`;
