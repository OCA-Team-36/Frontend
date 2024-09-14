import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E81255"
    },
    secondary: {
      main: "#C8C8C8"
    },
    background: {
      default: "#FFFFFF",
      netral: "#F3F3F3",
    },
    grey: {
      light: "#DDDDDD",
      medium: "#C1C7D0",
      bold: "#858585",
    }
  },
  typography: {
    fontFamily: 'Inter, Arial',
    button: {
      fontFamily: 'Inter, Arial',
      textTransform: 'none',
    },
  },
  components: {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          backgroundColor: '#C8C8C8',
        },
        listbox: {
          backgroundColor: '#F3F3F3', 
          '& .MuiAutocomplete-option': {
            '&:hover': {
              backgroundColor: '#E0E0E0', 
            },
            '&[aria-selected="true"]': {
              backgroundColor: '#E81255',
            },
          },
        },
      },
    },
  },
});

export default theme;
