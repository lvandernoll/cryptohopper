import { createTheme } from '@material-ui/core';
import { Shadows } from '@material-ui/core/styles/shadows';

const primaryText = '#0D0C43';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00b2c8',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      secondary: '#00b2c8',
      primary: primaryText,
      hint: '#7a7998',
    },
    success: {
      main: '#00b1c7',
      light: '#e6f7f9',
    },
    error: {
      main: '#ef6464',
      light: '#f9e6e6',
    },
    divider: primaryText,
  },
  shape: {
    borderRadius: 18,
  },
  typography: {
    fontFamily: 'Sofia Pro, sans-serif',
    fontWeightBold: 600,
    fontWeightMedium: 500,
    h1: {
      fontSize: 75,
      fontWeight: 500,
      lineHeight: 1.11,
    },
    h2: {
      fontSize: 44,
      fontWeight: 500,
      lineHeight: 1,
    },
    h3: {
      fontSize: 32,
      fontWeight: 600,
      lineHeight: 1,
    },
    h4: {
      fontSize: 32,
      lineHeight: 1,
    },
    h5: {
      fontSize: 21,
    },
    fontSize: 18,
  },
  shadows: Array(25).fill('none') as Shadows,
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      containedPrimary: {
        fontSize: 18,
      },
      outlined: {
        fontSize: 16,
        borderColor: `${primaryText}33`,
      },
    },
    MuiAppBar: {
      root: {
        height: 100,
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
      position: 'relative',
    },
  },
});

export default theme;
