import { PaletteMode } from "@mui/material";
import { grey } from "@mui/material/colors";
import darkScrollbar from "@mui/material/darkScrollbar";

// Will create a new theme and override the passed in values of the  default MUI theme
// Can read more about MUI theme and crete theme
// https://mui.com/material-ui/customization/default-theme/
// https://mui.com/material-ui/customization/theming/#custom-variables
// creating a custom light and dark theme https://mui.com/material-ui/customization/dark-mode/

// This will allow us to create custom overrides of the default theme with a light and dark mode
export const getDesignTokens = (mode: PaletteMode) => ({
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam: any) => ({
        body: themeParam.palette.mode === "dark" ? darkScrollbar() : null,
      }),
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: {
            main: "#810CA8",
          },
          secondary: {
            main: grey[700],
          },
          background: {
            paper: "#D6C0E6",
            default: "#D6C0E6",
          },
        }
      : {
          primary: {
            main: "#4b5ea6",
          },
          secondary: {
            main: "#EA463A",
          },
          background: {
            paper: "#424242",
            default: "#303030",
          },
        }),
  },
});
