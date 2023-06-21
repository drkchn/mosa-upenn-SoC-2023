import { Box, Typography } from "@mui/material";
import { HomePageSearchBar } from "../../components/homepageSearchBar/HomepageSearchBar.tsx";

export function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "75vh",
        marginTop: "0vh",
        backgroundColor: "secondary.main",
      }}
    >
      <Typography variant={"h3"}>Welcome to Civics Central!</Typography>
      <Typography variant={"h5"}>
        Enter your residential address and we'll take it from here!
      </Typography>

      <Box sx={{ marginTop: "5vh" }}>
        <HomePageSearchBar />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          height: "5vh",
          width: "80%",
          marginTop: "10vh",
          textAlign: "left",
        }}
      >
        <Typography variant={"h5"}>About our Summer of Code project</Typography>
        <Typography>
          Our website aims to encourage users to participate in democracy by
          making it easier to access elections information.
        </Typography>
        <Typography>
          When a user inputs their residential address, our website will display
          information based on any upcoming U.S. elections! Try it out!
        </Typography>
      </Box>
    </Box>
  );
}
