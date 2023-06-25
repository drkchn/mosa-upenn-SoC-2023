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

// Create a React context, this will make the value held here availble to all of its children
const ColorModeContext = React.createContext({});
function App() {
  const [mode, setMode] = React.useState<PaletteMode>(
    (localStorage.getItem("mode") as PaletteMode) || "light"
  );

  // regenerate the theme when the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    // ColorModeContext.Provider makes the color mode available down the React tree thanks to React context.
    // Mui will then use this to set the correct theme of each component in the tree.
    <ColorModeContext.Provider value={mode}>
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
          <Navbar mode={mode} setMode={setMode} />
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
