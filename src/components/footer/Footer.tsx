import { AppBar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <AppBar position="static" sx={{ bottom: 100 }}>
      <Box
        sx={{
          backgroundColor: "#F4C2C2",
          padding: "20px",
          textAlign: "center",
          position: "sticky",
          bottom: "0",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()}
          Our Website. All rights reserved.
        </Typography>
        <Typography>Created by: Connor, Derek, Gunjan, Prinsa</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Link to={"/"}>Home</Link>
          <Typography sx={{ marginBottom: "5px" }}></Typography>
          <Link to={"/page2"}>Why Vote?</Link>
          <Typography sx={{ marginBottom: "5px" }}></Typography>
          <Link to={"/example"}>Example</Link>
          <Typography sx={{ marginBottom: "5px" }}></Typography>
          <Link to={"/example"}>Contact Us</Link>
        </Box>
      </Box>
    </AppBar>
  );
}
