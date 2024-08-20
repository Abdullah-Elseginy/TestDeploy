import { createTheme } from "@mui/material";
import {
  amber,
  blue,
  deepOrange,
  green,
  grey,
  orange,
  red,
} from "@mui/material/colors";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      //   ...(mode === "light"
      //     ? {
      //         // palette values for light mode
      //         primary: {
      //           main: amber[500],
      //           light: amber[300],
      //           dark: amber[700],
      //           contrastText: "#000",
      //         },
      //         secondary: {
      //           main: "#f50057",
      //           light: "#ff4081",
      //           dark: "#c51162",
      //           contrastText: "#fff",
      //         },
      //         error: {
      //           main: red[500],
      //           light: red[300],
      //           dark: red[700],
      //           contrastText: "#fff",
      //         },
      //         warning: {
      //           main: orange[500],
      //           light: orange[300],
      //           dark: orange[700],
      //           contrastText: "#000",
      //         },
      //         info: {
      //           main: blue[500],
      //           light: blue[300],
      //           dark: blue[700],
      //           contrastText: "#fff",
      //         },
      //         success: {
      //           main: green[500],
      //           light: green[300],
      //           dark: green[700],
      //           contrastText: "#000",
      //         },
      //         divider: amber[200],
      //         background: {
      //           default: "#f5f5f5",
      //           paper: "#fff",
      //         },
      //         text: {
      //           primary: grey[900],
      //           secondary: grey[800],
      //           disabled: grey[400],
      //         },
      //       }
      //     : {
      //         // palette values for dark mode
      //         primary: {
      //           main: deepOrange[500],
      //           light: deepOrange[300],
      //           dark: deepOrange[700],
      //           contrastText: "#fff",
      //         },
      //         secondary: {
      //           main: "#03a9f4",
      //           light: "#67daff",
      //           dark: "#007ac1",
      //           contrastText: "#000",
      //         },
      //         error: {
      //           main: red[400],
      //           light: red[300],
      //           dark: red[700],
      //           contrastText: "#fff",
      //         },
      //         warning: {
      //           main: orange[400],
      //           light: orange[300],
      //           dark: orange[700],
      //           contrastText: "#000",
      //         },
      //         info: {
      //           main: blue[400],
      //           light: blue[300],
      //           dark: blue[700],
      //           contrastText: "#fff",
      //         },
      //         success: {
      //           main: green[400],
      //           light: green[300],
      //           dark: green[700],
      //           contrastText: "#000",
      //         },
      //         divider: deepOrange[700],
      //         background: {
      //           default: deepOrange[900],
      //           paper: deepOrange[900],
      //         },
      //         text: {
      //           primary: "#fff",
      //           secondary: grey[500],
      //           disabled: grey[400],
      //         },
      //       }),
    },
  });
