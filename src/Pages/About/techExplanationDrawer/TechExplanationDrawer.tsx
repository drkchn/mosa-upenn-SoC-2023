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
          See Less
        </Fab>
      </Box>
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: "10px", textAlign: "center" }}
        >
          Tech Explanation
        </Typography>

        <Typography>
          {" "}
          - google cloud apis - Firebase - React context, state, router - MUI -
          components and responsive design - Custom themes - Memoization -
          Typescript for strict type checking
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: "10px", textAlign: "center" }}
        >
          Development Setup
        </Typography>
        <Typography>
          - Prettier linter - Build and push scripts - React testing library and
          code coverage capability - Vite build tool - Environment variables
        </Typography>

        <Typography
          variant="h5"
          component="h2"
          sx={{ margin: "10px", textAlign: "center" }}
        >
          Collaboration
        </Typography>
        <Typography>- trunk based development - Githooks</Typography>
      </Box>
    </Drawer>
  );
};
