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
