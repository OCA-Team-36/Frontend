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
});

export default theme;
