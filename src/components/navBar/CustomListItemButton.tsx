import { useTheme } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";

export const CustomListItemButton = ({ to, primary, fullWidth }: any) => {
  const theme = useTheme();
  const location = useLocation();
  const [selected, setSelected] = useState<boolean>(to === location.pathname);

  useEffect(() => {
    if (location) {
      setSelected(to === location.pathname);
    }
  }, [location]);

  const selectedStyles = {
    borderBottom: "5px solid",
    borderColor: theme.palette.background.paper,
    textAlign: "center",

    "&:hover": {
      borderBottom: "5px solid",
      borderColor: theme.palette.secondary.main,
      borderRadius: "5px",
    },
  };

  const unselectedStyles = {
    borderBottom: "5px solid",
    borderColor: "transparent",
    "&:hover": {
      borderBottom: "5px solid",
      borderColor: theme.palette.secondary.main,
      borderRadius: "5px",
    },
  };

  return (
    <ListItem sx={{ width: fullWidth ? "100%" : "fit-content" }}>
      <ListItemButton
        component={NavLink}
        to={to}
        sx={selected ? selectedStyles : unselectedStyles}
      >
        {primary}
      </ListItemButton>
    </ListItem>
  );
};
