import styled from 'styled-components';
import colors from '../../styles/colors';

export const ControlsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const RowSection = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: ${colors.white};
`;
