import { PaletteMode } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

// Will create a new theme and override the passed in values of the  default MUI theme
// Can read more about MUI theme and crete theme
// https://mui.com/material-ui/customization/default-theme/
// https://mui.com/material-ui/customization/theming/#custom-variables
// creating a custom light and dark theme https://mui.com/material-ui/customization/dark-mode/

// This will allow us to create custom overrides of the default theme with a light and dark mode
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#810CA8",
          },
          secondary: {
            main: "#D6C0E6",
          },
          error: {
            main: "#d32f2f",
          },
          warning: {
            main: "#ed6c02",
          },
          success: {
            main: "#2e7d32",
          },
          info: {
            main: "#0288d1",
          },
          background: {
            paper: "#D6C0E6",
            default: "#D6C0E6",
          },
          text: {
            primary: "rgba(0, 0, 0, 0.87)",
          },
        }
      : {
          // palette values for dark mode
          primary: blueGrey,
          divider: blueGrey[700],
          background: {
            default: blueGrey[900],
            paper: blueGrey[900],
          },
          text: {
            primary: "#fff",
            secondary: grey[500],
          },
        }),
  },
});
