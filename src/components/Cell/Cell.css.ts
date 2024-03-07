import styled from 'styled-components';
import colors from '../../styles/colors';

interface CellContainerProps {
	$isAlive: boolean,
}

export const CellContainer = styled.div<CellContainerProps>`
  width: 2.2rem;
  aspect-ratio: 1;
  border: 1px solid ${colors.airSuperiorityBlue};
  background-color: ${({ $isAlive }) => ($isAlive ? `${colors.prussianBlue}` : `${colors.papayaWhip}`)};
`;
