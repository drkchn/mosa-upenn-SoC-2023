import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar variant="regular" sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit" component="div">
          Basic Tool bar
        </Typography>
        <Link to={"/"}>Home</Link>
        <Link to={"/page2"}>Why Vote?</Link>
        <Link to={"/example"}>Example</Link>
      </Toolbar>
    </AppBar>
  );
}
