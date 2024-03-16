import styled from 'styled-components';
import colors from '../../styles/colors';
import Box from '@mui/material/Box';

export const BoxStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  /* max-height: 80%; */
  background-color: ${colors.black};
  color: ${colors.white};
  border: 2px solid ${colors.orangeWeb};
  border-radius: 1rem;
  box-shadow: 24px;
  padding: 4px;
`;

export const ScrollableContent = styled.div`
  max-height: 80vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: ${colors.black};
  }
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 2px;
  }
`;
