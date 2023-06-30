import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeToggle } from "../themeToggle/ThemeToggle.tsx";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

export function Navbar() {
  return (
    <AppBar position="static" sx={{ marginBottom: "1rem" }}>
      <Toolbar
        variant="regular"
        sx={{
          justifyContent: "space-between",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          component={Link}
          to={"/"}
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <HowToVoteIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="h1">
            Civics Central
          </Typography>
        </Box>
        <Button
          variant="outlined"
          component={Link}
          to={"/whyvote"}
          color="inherit"
        >
          Why Vote?
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to={"/civicInformation"}
          color="inherit"
        >
          Civic Info
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to={"/contactus"}
          color="inherit"
        >
          Contact Us
        </Button>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
