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
        minHeight: "65vh",
        // marginTop: "0vh",
        backgroundColor: "secondary.main",
      }}
    >
      <Typography variant={"h3"}>Welcome to Civics Central!</Typography>
      <Typography variant={"h5"}>
        Enter your residential address and we'll take it from here!
      </Typography>

      <HomePageSearchBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          minHeight: "5vh",
          width: "80%",
          marginTop: "10vh",
          marginBottom: { xs: "5vh", sm: "3vh", md: "0vh" },
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
