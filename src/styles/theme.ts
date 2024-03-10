import { createTheme } from '@mui/material/styles';
import colors from './colors';

export const theme = createTheme({
  palette: {
    primary: {
      main: `${colors.prussianBlue}`,
    },
    secondary: {
      main: `${colors.orangeWeb}`,
    },
  },
});
