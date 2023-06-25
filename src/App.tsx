import "./App.css";
import { Home } from "./Pages/Home/Home.tsx";
import { Navbar } from "./components/navBar/Navbar.tsx";
import { Route, Routes } from "react-router-dom";
import { Page2 } from "./Pages/Page2/Page2.tsx";
import { Example } from "./Pages/Example/Example.tsx";
import { Footer } from "./components/footer/Footer.tsx";
import { WhyVote } from "./Pages/WhyVote/WhyVote.tsx";
import {
  Box,
  createTheme,
  CssBaseline,
  PaletteMode,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import { getDesignTokens } from "./theme.ts";

// eslint-disable-next-line @typescript-eslint/no-empty-function
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function App() {
  const [mode, setMode] = React.useState<PaletteMode>(
    (localStorage.getItem("mode") as PaletteMode) || "light"
  );

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
        localStorage.setItem(
          "mode",
          localStorage.getItem("mode") === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  // regenerate the theme when the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    // ColorModeProvider makes the color mode available down the React tree thanks to React context.
    <ColorModeContext.Provider value={colorMode}>
      {/*Theme provider provides customTheme access to the App and all of its children*/}
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon and also makes the theme take effect on background colors */}
        <CssBaseline />
        <Box
          sx={{
            backgroundColor: "background.default",
            padding: { xs: "0rem", sm: "2rem" },
          }}
        >
          <Navbar mode={mode} setMode={setMode} colorMode={colorMode} />
          <Box
            sx={{
              minHeight: "70vh",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/example" element={<Example />} />
              <Route path="/whyvote" element={<WhyVote />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
