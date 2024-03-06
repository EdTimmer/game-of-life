import styled from 'styled-components';
import colors from '../../styles/colors';

export const BoardContainer = styled.div`
  border: 2px solid ${colors.airSuperiorityBlue};
  user-select: none;
  margin: auto;
  width: fit-content;
`;

export const RowContainer = styled.div`
  display: flex;
`;
