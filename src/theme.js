import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1E88E5', // A vibrant blue
      light: '#60A5FA',
      dark: '#1565C0',
    },
    secondary: {
      main: '#FFC107', // A warm amber
      light: '#FFD54F',
      dark: '#FFA000',
    },
    background: {
      default: '#E8EAF6', // Light indigo for the page background
      paper: '#FFFFFF',   // White for the form background
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export default theme;