import styled from 'styled-components';
import colors from '../../styles/colors';

export const ControlsContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const RowSection = styled.div`
  margin: 0 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
`;

export const CenterSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const SideContainer = styled.div`
  width: 5rem;
  height: 100%;
`;

export const Counter = styled.p`
  color: ${colors.white};
  font-size: 1.6rem;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
`;