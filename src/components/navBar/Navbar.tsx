import { Link, useTheme } from "@mui/material";
import { ThemeToggle } from "../themeToggle/ThemeToggle.tsx";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import { useState } from "react";

interface navBarProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
export function Navbar({ window }: navBarProps) {
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen((prevState: any) => !prevState);
  };

  const CustomListItemButton = ({ to, primary, fullWidth }: any) => {
    const [selected] = useState<boolean>(to === location.pathname);
    const theme = useTheme();

    const selectedStyles = {
      borderBottom: "5px solid",
      borderColor: theme.palette.background.paper,
      textAlign: "center",
    };

    return (
      <ListItem sx={{ width: fullWidth ? "100%" : "fit-content" }}>
        <ListItemButton
          component={Link}
          href={to}
          sx={selected ? selectedStyles : {}}
        >
          {primary}
        </ListItemButton>
      </ListItem>
    );
  };

  const CustomListDrawerItemButton = ({ to, primary }: any) => {
    const [selected] = useState<boolean>(to === location.pathname);
    const theme = useTheme();

    const selectedStyles = {
      backgroundColor: theme.palette.secondary.main,
      borderRadius: "5px",
      textAlign: "center",
      width: "100%",
      color: "#fff",

      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
      },
    };

    return (
      <ListItem sx={{ width: "100%", borderRadius: "5px" }}>
        <ListItemButton
          component={Link}
          href={to}
          sx={selected ? selectedStyles : {}}
        >
          {primary}
        </ListItemButton>
      </ListItem>
    );
  };

  // Only visible on small screens
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        component={Link}
        sx={{
          textDecoration: "none",
          textAlign: "center",
          backgroundColor: "primary.main",
          color: "#fff",
        }}
        href={"/"}
      >
        <IconButton size="large" edge="start" aria-label="menu">
          <HowToVoteIcon sx={{ color: "#fff" }} />
        </IconButton>
        <Typography variant="h6" component="h1">
          Civics Central
        </Typography>
      </Box>

      <Divider />

      <List>
        <CustomListDrawerItemButton to={"/"} primary={"HOME"} />
        <CustomListDrawerItemButton
          to={"/civicInformation"}
          primary={"CIVIC INFO"}
        />
        <CustomListDrawerItemButton to={"/whyvote"} primary={"WHY VOTE?"} />
        <CustomListDrawerItemButton to={"/contact"} primary={"CONTACT US"} />
        <ThemeToggle />
      </List>
    </Box>
  );

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

          <Box
            justifyContent="center"
            alignItems="center"
            component={Link}
            sx={{
              textDecoration: "none",
              color: "inherit",
              textAlign: "center",
              backgroundColor: "primary.main",
              display: { xs: "none", sm: "flex" },
              cursor: "pointer",
            }}
            href={"/"}
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
            <CustomListItemButton to={"/contact"} primary={"CONTACT US"} />
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
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
