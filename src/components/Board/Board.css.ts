import styled from 'styled-components';

export const ViewportContainer = styled.div`
  width: auto;
  height: 80vh;
  overflow: hidden;
  margin: 0 1.4rem 1.4rem 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardContainer = styled.div`
  user-select: none;
  width: fit-content;
  height: fit-content;
`;

export const RowContainer = styled.div`
  display: flex;
`;
