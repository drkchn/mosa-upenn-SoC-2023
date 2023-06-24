import { createTheme } from "@mui/material";

// Will create a new theme and override the passed in values of the  default MUI theme
// Can read more about MUI theme and crete theme
// https://mui.com/material-ui/customization/default-theme/
// https://mui.com/material-ui/customization/theming/#custom-variables

export const theme = createTheme({
  palette: {
    mode: "light",
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
      paper: "#FFFFFF",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
    },
  },
});

// {
//   "mode": "light",
//     "primary": {
//   "main": "#4B5EA5",
//       "light": "rgb(111, 126, 183)",
//       "dark": "rgb(52, 65, 115)",
//       "contrastText": "#fff"
// },
//   "secondary": {
//   "main": "#101424",
//       "light": "rgb(63, 67, 79)",
//       "dark": "rgb(11, 14, 25)",
//       "contrastText": "#fff"
// },
//   "text": {
//   "primary": "rgba(0, 0, 0, 0.87)",
//       "secondary": "rgba(0, 0, 0, 0.6)",
//       "disabled": "rgba(0, 0, 0, 0.38)"
// },
//   "common": {
//   "black": "#000",
//       "white": "#fff"
// },
//   "error": {
//   "main": "#d32f2f",
//       "light": "#ef5350",
//       "dark": "#c62828",
//       "contrastText": "#fff"
// },
//   "warning": {
//   "main": "#ed6c02",
//       "light": "#ff9800",
//       "dark": "#e65100",
//       "contrastText": "#fff"
// },
//   "info": {
//   "main": "#0288d1",
//       "light": "#03a9f4",
//       "dark": "#01579b",
//       "contrastText": "#fff"
// },
//   "success": {
//   "main": "#2e7d32",
//       "light": "#4caf50",
//       "dark": "#1b5e20",
//       "contrastText": "#fff"
// },
//   "grey": {
//   "50": "#fafafa",
//       "100": "#f5f5f5",
//       "200": "#eeeeee",
//       "300": "#e0e0e0",
//       "400": "#bdbdbd",
//       "500": "#9e9e9e",
//       "600": "#757575",
//       "700": "#616161",
//       "800": "#424242",
//       "900": "#212121",
//       "A100": "#f5f5f5",
//       "A200": "#eeeeee",
//       "A400": "#bdbdbd",
//       "A700": "#616161"
// },
//   "contrastThreshold": 3,
//     "tonalOffset": 0.2,
//     "divider": "rgba(0, 0, 0, 0.12)",
//     "background": {
//   "paper": "#fff",
//       "default": "#fff"
// },
//   "action": {
//   "active": "rgba(0, 0, 0, 0.54)",
//       "hover": "rgba(0, 0, 0, 0.04)",
//       "hoverOpacity": 0.04,
//       "selected": "rgba(0, 0, 0, 0.08)",
//       "selectedOpacity": 0.08,
//       "disabled": "rgba(0, 0, 0, 0.26)",
//       "disabledBackground": "rgba(0, 0, 0, 0.12)",
//       "disabledOpacity": 0.38,
//       "focus": "rgba(0, 0, 0, 0.12)",
//       "focusOpacity": 0.12,
//       "activatedOpacity": 0.12
// }
// }
