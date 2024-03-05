import styled from 'styled-components';

interface CellContainerProps {
	$isAlive: boolean,
}

export const CellContainer = styled.div<CellContainerProps>`
  width: 4rem;
  aspect-ratio: 1;
  border: 1px solid black;
  background-color: ${({ $isAlive }) => ($isAlive ? 'black' : 'white')};
`;
