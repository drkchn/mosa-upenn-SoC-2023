import { createTheme } from "@mui/material";

// Will create a new theme and override the passed in values of the  default MUI theme
// Can read more about MUI theme and crete theme
// https://mui.com/material-ui/customization/default-theme/
// https://mui.com/material-ui/customization/theming/#custom-variables

export const theme = createTheme({
  palette: {
    primary: {
      main: "#5791aa",
    },
  },
});
