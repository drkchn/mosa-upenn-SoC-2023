import { Button, Link, Menu, MenuItem } from "@mui/material";
import * as React from "react";
import { ThemeToggle } from "../themeToggle/ThemeToggle.tsx";
import { HistoryToggle } from "../historyToggle/HistoryToggle.tsx";
import CodeIcon from "@mui/icons-material/Code";
export const NavbarMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        More
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <ThemeToggle />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <HistoryToggle setCallHistoryOpen={() => false} />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <CodeIcon />
          <Link
            sx={{ color: "#fff" }}
            href={"https://github.com/drkchn/mosa-upenn-SoC-2023"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          ></Link>{" "}
        </MenuItem>
      </Menu>
    </>
  );
};
