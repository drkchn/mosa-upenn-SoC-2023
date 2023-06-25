import {
  AppBar,
  Button,
  PaletteMode,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../themeToggle/ThemeToggle.tsx";

interface navBarProps {
  mode: PaletteMode;
  setMode: (mode: PaletteMode) => void;
}
export function Navbar({ mode, setMode }: navBarProps) {
  return (
    <AppBar position="static">
      <Toolbar
        variant="regular"
        sx={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Typography variant="h6" color="inherit" component="h1">
          Civics Tool
        </Typography>
        <Button component={Link} to={"/"} color="inherit">
          Home
        </Button>
        <Button component={Link} to={"/page2"} color="inherit">
          Page 2
        </Button>
        <Button component={Link} to={"/example"} color="inherit">
          Example
        </Button>
        <Button component={Link} to={"/whyvote"} color="inherit">
          Why Vote
        </Button>
        <ThemeToggle mode={mode} setMode={setMode} />
      </Toolbar>
    </AppBar>
  );
}
