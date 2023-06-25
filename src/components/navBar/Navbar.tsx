import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Navbar() {
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
      </Toolbar>
    </AppBar>
  );
}
