import { Box, Typography } from "@mui/material";
import { AddressSearchBar } from "../../components/addressSearchBar/AddressSearchBar.tsx";

export function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "65vh",
      }}
    >
      <Typography variant={"h3"}>Welcome to Civics Central</Typography>
      <Typography variant={"h5"}>
        Enter any U.S. address and we'll take it from here.
      </Typography>

      <AddressSearchBar isHomePage={true} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          height: "auto",
          width: "80%",
          marginTop: "10vh",
          marginBottom: { xs: "5vh", sm: "3vh", md: "0vh" },
          textAlign: "left",
        }}
      ></Box>
    </Box>
  );
}
