import { useEffect, useState } from "react";
import { Box, IconButton, Link, Typography, useTheme } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import { ThemeToggle } from "../themeToggle/ThemeToggle.tsx";

import { NavLink, useLocation } from "react-router-dom";
import { SeeCodeButton } from "./SeeCodeButton.tsx";

interface customListDrawerItemProps {
  to: string;
  primary: string;
}

const CustomListDrawerItemButton = ({
  to,
  primary,
}: customListDrawerItemProps) => {
  const theme = useTheme();
  const location = useLocation();
  const [selected, setSelected] = useState<boolean>(to === location.pathname);

  useEffect(() => {
    if (location) {
      setSelected(to === location.pathname);
    }
  }, [location]);

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
        component={NavLink}
        to={to}
        sx={selected ? selectedStyles : {}}
      >
        {primary}
      </ListItemButton>
    </ListItem>
  );
};

interface navbarDrawerProps {
  handleDrawerToggle: () => void;
}

// Only visible on small screens
export const NavbarDrawer = ({ handleDrawerToggle }: navbarDrawerProps) => {
  return (
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
        <CustomListDrawerItemButton to={"/about"} primary={"ABOUT"} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <ThemeToggle />
          <SeeCodeButton />
        </Box>
      </List>
    </Box>
  );
};
