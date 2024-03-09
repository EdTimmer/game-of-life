import styled from 'styled-components';
import colors from '../../styles/colors';

export const ViewportContainer = styled.div`
  width: 90rem;
  height: 90rem;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid ${colors.barnRed};
`;

export const BoardContainer = styled.div`
  user-select: none;
  width: fit-content;
  height: fit-content;
`;

export const RowContainer = styled.div`
  display: flex;
`;
