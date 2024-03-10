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
    action: {
      disabledBackground: `${colors.platinum}`,
      disabled: `${colors.teal}`
    }
  },
  components: {
    MuiSlider: {
      styleOverrides: {
        thumb: {
          color: `${colors.orangeWeb}`,
        },
        track: {
          color: `${colors.orangeWeb}`,
        },
        rail: {
          color: `${colors.platinum}`,
        },
      },
    },
  },
});
