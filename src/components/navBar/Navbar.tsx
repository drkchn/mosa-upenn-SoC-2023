import {
  AppBar,
  Button,
  PaletteMode,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../themeToggle/ThemeToggle.tsx";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

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
        <Box display="flex" alignItems="center">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            component={Link}
            to={"/"}
          >
            <HowToVoteIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="h1">
            Civics Central
          </Typography>
        </Box>
        <Button variant="outlined" component={Link} to={"/"} color="inherit">
          Home
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to={"/page2"}
          color="inherit"
        >
          Why Vote?
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to={"/example"}
          color="inherit"
        >
          Example
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to={"/whyvote"}
          color="inherit"
        >
          Empty Page
        </Button>
        <ThemeToggle mode={mode} setMode={setMode} />
      </Toolbar>
    </AppBar>
  );
}
