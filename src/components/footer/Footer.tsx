import { AppBar, Box, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

export function Footer() {
  return (
    <AppBar position="static" sx={{ bottom: 100 }}>
      <Box
        sx={{
          padding: "20px",
          textAlign: "center",
          position: "sticky",
          bottom: "0",
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} &nbsp; Our Website. All rights
          reserved.
        </Typography>
        <Typography>
          Created by: Connor Fech, Derek Chen, Gunjan Jhaveri & Prinsa Patel
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "10px",
            marginTop: "10px",
          }}
        >
          <Link color="white" underline="hover" component={RouterLink} to={"/"}>
            Home
          </Link>
          <Typography sx={{ marginBottom: "5px" }}></Typography>
          <Link
            color="white"
            underline="hover"
            component={RouterLink}
            to={"/whyvote"}
          >
            Why Vote?
          </Link>
          <Typography sx={{ marginBottom: "5px" }}></Typography>
          <Link
            color="white"
            underline="hover"
            component={RouterLink}
            to={"/example"}
          >
            Example
          </Link>
          <Typography sx={{ marginBottom: "5px" }}></Typography>
          <Link
            color="white"
            underline="hover"
            component={RouterLink}
            to={"/contactus"}
          >
            Contact Us
          </Link>
        </Box>
      </Box>
    </AppBar>
  );
}
