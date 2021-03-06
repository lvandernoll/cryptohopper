import { createTheme } from '@material-ui/core';
import { Shadows } from '@material-ui/core/styles/shadows';

const primaryText = '#0D0C43';
const backgroundColor = '#fff';
const hintText = '#7a7998';
const elevation = Array(25).fill('none') as Shadows;
elevation[1] =
  '0px 10px 32px rgba(5, 85, 95, 0.06), 0px 8px 24px rgba(5, 85, 95, 0.04)';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#00b2c8',
      light: '#f8f7fc',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: backgroundColor,
    },
    text: {
      secondary: '#00b2c8',
      primary: primaryText,
      hint: hintText,
    },
    success: {
      main: '#00b1c7',
      light: '#e6f7f9',
    },
    error: {
      main: '#ef6464',
      light: '#f9e6e6',
    },
    divider: '#E5F4F5',
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
      fontWeight: 300,
    },
    h6: {
      fontSize: 14,
    },
    fontSize: 18,
  },
  shadows: elevation,
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
      },
      textPrimary: {
        backgroundColor,
      },
      containedPrimary: {
        fontSize: 18,
      },
      outlined: {
        fontSize: 16,
        borderColor: `${primaryText}33`,
        backgroundColor,
      },
    },
    MuiSelect: {
      root: {
        borderRadius: 8,
      },
      outlined: {
        paddingTop: 13,
        paddingBottom: 13,
      },
    },
    MuiInputLabel: {
      formControl: {
        left: 20,
        transform: 'translate(0, 16px) scale(1)',
        color: hintText,
        fontSize: 18,
      },
      shrink: {
        fontSize: 22,
        transform: 'translate(0, -8.5px) scale(0.75)',
      },
    },
    MuiAppBar: {
      root: {
        height: 100,
      },
    },
    MuiTableCell: {
      root: {
        borderBottom: 'none',
        fontSize: 21,
      },
    },
  },
  props: {
    MuiAppBar: {
      color: 'inherit',
      position: 'relative',
    },
    MuiSelect: {
      variant: 'outlined',
    },
  },
});

theme.typography.h1[theme.breakpoints.down('xs')] = {
  fontSize: 32,
};
theme.typography.h4[theme.breakpoints.down('xs')] = {
  fontSize: 21,
  lineHeight: 1.5,
};
theme.typography.h5[theme.breakpoints.down('xs')] = {
  fontSize: 16,
  lineHeight: 1.5,
};

export default theme;
