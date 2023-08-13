import { Grid, Typography, Box, Link, Fab } from "@mui/material";
import ReactIMG from "../../assets/React-Logo.svg";
import TypescriptIMG from "../../assets/Typescript-Logo.png";
import NodeIMG from "../../assets/Node-Logo.webp";
import GoogleCloudIMG from "../../assets/Google-Cloud-Logo.png";
import ViteIMG from "../../assets/Vite-Logo.png";
import MUIIMG from "../../assets/MUI-Logo.png";
import React from "react";
import { TechExplanationDrawer } from "./techExplanationDrawer/TechExplanationDrawer.tsx";

const techstyle = {
  width: "125px",
  height: "125px",
  justifyContent: "space-evenly",
  "&:hover": {
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    transform: "scale(1.05)",
  },
};

//sx={{border: "2px solid red", padding: "30px 30px 100px 30px;"}}
export function About() {
  const [openExplanationDrawer, setOpenExplanationDrawer] =
    React.useState<boolean>(false);

  const buttonStyling = {
    width: "15%",
    minWidth: "175px",
    margin: "50px 0px",
    transition: "opacity 0.2s linear",
    opacity: openExplanationDrawer ? "0" : "1",
    "&:hover": {
      cursor: "pointer",
      transform: "scale(1.05)",
    },

    "&:active": {
      transform: "scale(1)",
    },
  };

  return (
    <Box>
      <Typography variant="h3" align="center" sx={{ py: 2 }}>
        About Us
      </Typography>

      <Typography>
        Our website aims to encourage users to participate in democracy by
        making it easier to access elections information.
      </Typography>
      <Typography>
        When a user inputs their residential address, our website will display
        information based on any upcoming U.S. elections! Try it out!
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12}>
          <Typography variant="body1" align="center" sx={{ py: 4 }}>
            Derek Chen: derche@seas.upenn.edu <br />
            Connor Fech: cfech@seas.upenn.edu <br />
            Gunjan Jhaveri: gjhaveri@seas.upenn.edu <br />
            Prinsa Patel: prinsa@seas.upenn.edu <br />
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="h3" align="center" sx={{ marginBottom: "25px" }}>
        Technology
      </Typography>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ marginBottom: { xs: "25px", sm: "0px" } }}
      >
        <Grid item xs={6} sm={4} md={2}>
          <Link
            href={"https://react.dev/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <Box component={"img"} src={ReactIMG} sx={techstyle} />
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Link
            href={"https://www.typescriptlang.org/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <Box component={"img"} src={TypescriptIMG} sx={techstyle} />
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Link
            href={"https://nodejs.org/en"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <Box component={"img"} src={NodeIMG} sx={techstyle} />
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Link
            href={"https://cloud.google.com/gcp"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <Box
              component={"img"}
              src={GoogleCloudIMG}
              sx={{
                width: "200px",
                height: "125px",
                justifyContent: "space-evenly",
                "&:hover": {
                  cursor: "pointer",
                  transition: "all 0.3s ease-in-out",
                  transform: "scale(1.05)",
                },
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Link
            href={"https://vitejs.dev/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <Box component={"img"} src={ViteIMG} sx={techstyle} />
          </Link>
        </Grid>
        <Grid item xs={6} sm={4} md={2}>
          <Link
            href={"https://mui.com/"}
            target={"_blank"}
            rel={"noopener noreferrer"}
          >
            <Box component={"img"} src={MUIIMG} sx={techstyle} />
          </Link>
        </Grid>
      </Grid>

      <Box>

        <Fab
          sx={buttonStyling}
          variant="extended"
          color="primary"
          aria-label="add"
          onClick={() => {
            setOpenExplanationDrawer(true);
          }}
        >
          See More
        </Fab>
      </Box>

      <TechExplanationDrawer
        open={openExplanationDrawer}
        setOpen={setOpenExplanationDrawer}
      />
    </Box>
  );
}
