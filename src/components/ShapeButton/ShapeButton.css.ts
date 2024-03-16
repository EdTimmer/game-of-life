import styled from 'styled-components';
import colors from '../../styles/colors';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
  width: 100%;
  min-height: 20rem;
  padding: 0;
  display: flex;
  &.MuiButton-outlined {
    border-width: 2px !important; // Increase the border thickness
    border-radius: 10px !important; // Change the border radius
  }
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0.6rem;
  width: 100%;
  height: 100%;
  /* border: 2px solid ${colors.orangeWeb};
  border-radius: 1rem; */
`;

export const ButtonHeader = styled.p`
  margin: 0 0 1.2rem 0;
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  color: ${colors.orangeWeb};
  text-transform: uppercase;
`;

export const ButtonTopRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const ButtonBottomRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  gap: 2rem;
`;

export const ButtonDescriptionContainer = styled.div`
  margin: 0;
  padding: 0;
  min-height: 20rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const DescriptionText = styled.p`
  margin: 0;
  padding: 0;
  color: ${colors.white};
  font-size: 1.8rem;
  font-weight: normal;
  text-align: left;
  text-transform: none;
`;
