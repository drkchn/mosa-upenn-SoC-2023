import HowToVoteIcon from "@mui/icons-material/HowToVote";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { NavbarDrawer } from "./NavbarDrawer.tsx";

import { NavLink } from "react-router-dom";
import { HistoryToggle } from "../historyToggle/HistoryToggle.tsx";
import { CustomListItemButton } from "./CustomListItemButton.tsx";
import { ThemeToggle } from "../themeToggle/ThemeToggle.tsx";
import { SeeCodeButton } from "./SeeCodeButton.tsx";

interface navBarProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  setCallHistoryOpen: (open: boolean) => void;
}
export function Navbar({ window, setCallHistoryOpen }: navBarProps) {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState<boolean>(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState: boolean) => !prevState);
  };

  // ====================================================================

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ marginBottom: "5rem" }}>
      <AppBar
        component="nav"
        sx={{ backgroundColor: "primary.main", backgroundImage: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ marginLeft: "auto", display: { sm: "none" } }}>
            <HistoryToggle setCallHistoryOpen={setCallHistoryOpen} />
          </Box>

          <Box
            justifyContent="center"
            alignItems="center"
            component={NavLink}
            sx={{
              textDecoration: "none",
              color: "inherit",
              textAlign: "center",
              backgroundColor: "primary.main",
              display: { xs: "none", sm: "flex" },
              cursor: "pointer",
            }}
            to={"/"}
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

          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              marginLeft: "auto",
              width: "80%",
              justifyContent: "space-evenly",
              height: "64px",
              alignItems: "center",
            }}
          >
            <CustomListItemButton to={"/"} primary={"HOME"} />
            <CustomListItemButton
              to={"/civicInformation"}
              primary={"CIVIC INFO"}
            />
            <CustomListItemButton to={"/whyvote"} primary={"WHY VOTE?"} />
            <CustomListItemButton to={"/about"} primary={"ABOUT"} />

            {/*<NavbarMenu />*/}
            <SeeCodeButton />
            <HistoryToggle setCallHistoryOpen={setCallHistoryOpen} />
            <ThemeToggle />
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <NavbarDrawer handleDrawerToggle={handleDrawerToggle} />
        </Drawer>
      </Box>
    </Box>
  );
}
