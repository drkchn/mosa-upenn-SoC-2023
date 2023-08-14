import Drawer from "@mui/material/Drawer";
import { Box, Fab, Typography, useTheme } from "@mui/material";

interface techExplanationDrawerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const TechExplanationDrawer = ({
  open,
  setOpen,
}: techExplanationDrawerProps) => {
  const theme = useTheme();

  return (
    <Drawer
      sx={{
        transition: "opacity .8s ease-in",
        opacity: open ? "1" : "0",
      }}
      anchor={"bottom"}
      open={open}
      onClose={() => setOpen(false)}
      transitionDuration={800}
      PaperProps={{
        sx: {
          width: { xs: "90%", sm: "80%" },
          height: "75%",
          maxHeight: "1200px",
          margin: "auto",
          borderRadius: "25px 25px 0px 0px",
          backgroundColor: theme.palette.background.default,
          backgroundImage: "none",
        },
      }}
    >
      <Box sx={{ textAlign: "center", margin: "10px" }}>
        <Fab
          sx={{
            width: "15%",
            minWidth: "175px",
            transition: "opacity 0.7s linear",
            opacity: open ? "1" : "0",
            "&:hover": {
              cursor: "pointer",
              transform: "scale(1.05)",
            },

            "&:active": {
              transform: "scale(1)",
            },
          }}
          variant="extended"
          color="primary"
          aria-label="add"
          onClick={() => {
            setOpen(false);
          }}
        >
          Close
        </Fab>
      </Box>
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: "10px", textAlign: "center" }}
        >
          Application Design
        </Typography>

        <Typography sx={{ textAlign: "center" }}>
          {" "}
          Civics Central is developed using React, Typescript and Vite.
          Typescript is utilized to enforce strict static typing. Axios is used
          to query multiple different API's from the Google Cloud Suite from
          which the reposes are memoized in order to limit overuse of Google
          Civics API and hitting our rate limit. Our application using React
          Router to handle rendering different pages as well as React Context
          and State to share data between components. Material UI component
          library is leveraged for pre-built components, implementing custom
          application themes and applying principals of responsive design.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: "10px", textAlign: "center" }}
        >
          Local Development Environment
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          Our local development configuration is focused on enforcing frontend
          development best practices. We utilized prettier and eslint to enforce
          code format standards as well as build and push scripts that run
          linters and tests and the Vite build tool to package code for
          production. Our application also has React Testing Library and Jest
          for unit testing and code coverage reports. Environment variables are
          used to pass various run time arguments to the application, such as
          API keys.
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: "10px", textAlign: "center" }}
        >
          Team Collaboration
        </Typography>
        <Typography sx={{ textAlign: "center" }}>
          {" "}
          Our team practiced a trunk based development methodology to
          effectively and efficiently collaborate on on this project. We
          utilized git branches and github issues in order to collaborate
          together and mitigate potential merge conflicts. In a trunk based
          development model the main branch acts as the single source of truth
          and one off branches are checked out on a per issue basis then merged
          back into the main branch after the issue is complete.{" "}
        </Typography>
      </Box>
    </Drawer>
  );
};
