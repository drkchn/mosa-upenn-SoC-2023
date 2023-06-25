import { useEffect } from "react";
import { IconButton, PaletteMode } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface themeToggleProps {
  mode: PaletteMode;
  colorMode: {
    toggleColorMode: () => void;
  };

  setMode: (mode: PaletteMode) => void;
}

export const ThemeToggle = ({ mode, setMode, colorMode }: themeToggleProps) => {
  useEffect(() => {
    if (localStorage.getItem("mode") === null) {
      localStorage.setItem("mode", "light");
    }
    const mode: PaletteMode = localStorage.getItem("mode") as PaletteMode;
    setMode(mode);
  }, [setMode]);

  return (
    <IconButton
      sx={{ ml: 1 }}
      onClick={colorMode.toggleColorMode}
      color="inherit"
    >
      {mode == "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};
