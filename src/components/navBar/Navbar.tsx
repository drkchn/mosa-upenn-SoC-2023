import { AppBar, PaletteMode, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../themeToggle/ThemeToggle.tsx";
interface navBarProps {
  mode: PaletteMode;
  setMode: (mode: PaletteMode) => void;

  colorMode: {
    toggleColorMode: () => void;
  };
}
export function Navbar({ mode, setMode, colorMode }: navBarProps) {
  return (
    <AppBar position="static">
      <Toolbar
        variant="regular"
        sx={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // using mui break points to change the styling based on the width of the screen
        }}
      >
        <Typography variant="h6" color="inherit" component="div">
          Civics Tool
        </Typography>
        <Link to={"/"}>Home</Link>
        <Link to={"/page2"}>page2</Link>
        <Link to={"/example"}>example</Link>
        <Link to={"/whyvote"}>whyvote</Link>
        <ThemeToggle mode={mode} setMode={setMode} colorMode={colorMode} />
      </Toolbar>
    </AppBar>
  );
}
