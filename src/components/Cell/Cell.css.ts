import styled from 'styled-components';
import colors from '../../styles/colors';

interface CellContainerProps {
  $isAlive: boolean;
  zoomLevel: number;
}

export const CellContainer = styled.div<CellContainerProps>`
  width: ${({ zoomLevel }) => `${zoomLevel}px`};
  aspect-ratio: 1;
  border: 1px solid ${colors.black};
  background-color: ${({ $isAlive }) =>
    $isAlive ? `${colors.orangeWeb}` : `${colors.oxfordBlue}`};
`;
