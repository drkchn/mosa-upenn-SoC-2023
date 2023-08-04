import { Grid, Typography, Box, Link } from "@mui/material";
import ReactIMG from "../../assets/React-Logo.svg";
import TypescriptIMG from "../../assets/Typescript-Logo.png";
import NodeIMG from "../../assets/Node-Logo.webp";
import GoogleCloudIMG from "../../assets/GoogleCloud.png";
import ViteIMG from "../../assets/Vite-logo.png";
import MUIIMG from "../../assets/MUI-Logo.png";

const techstyle = {
  width: 125,
  height: 125,
  justifyContent: "space-evenly",
  "&:hover": {
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    transform: "scale(1.05)",
  },
};

export function About() {
  return (
    <div>
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
        sx={{ marginBottom: { xs: "125px", sm: "0px" } }}
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
            <Box component={"img"} src={GoogleCloudIMG} sx={techstyle} />
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
    </div>
  );
}