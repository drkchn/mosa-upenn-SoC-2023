import { useEffect } from "react";
import { IconButton, PaletteMode } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

interface themeToggleProps {
  mode: PaletteMode;
  setMode: (mode: PaletteMode) => void;
}

export const ThemeToggle = ({ mode, setMode }: themeToggleProps) => {
  useEffect(() => {
    if (localStorage.getItem("mode") === null) {
      localStorage.setItem("mode", "light");
    }
    const mode: PaletteMode = localStorage.getItem("mode") as PaletteMode;
    setMode(mode);
  }, [setMode]);

  const toggleColorMode = () => {
    setMode(mode == "light" ? "dark" : "light");

    localStorage.setItem(
      "mode",
      localStorage.getItem("mode") === "light" ? "dark" : "light"
    );
  };
  return (
    <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
      {mode == "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};
