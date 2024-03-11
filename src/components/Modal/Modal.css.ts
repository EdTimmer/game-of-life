import styled from 'styled-components';
import colors from '../../styles/colors';
import Box from '@mui/material/Box';

export const BoxStyled = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  background-color: ${colors.black};
  color: ${colors.white};
  border: 2px solid ${colors.orangeWeb};
  border-radius: 1rem;
  box-shadow: 24px;
  padding: 4px;
`
