import { Typography, useTheme } from "@mui/material";
import Paper from "@mui/material/Paper";

export function Footer() {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        backgroundColor: "primary.main",
        padding: "1.5rem",
        textAlign: "center",
        width: "100%",
        color: theme.palette.primary.contrastText,
        height: "auto",
        marginTop: "auto",
      }}
      component={"footer"}
    >
      <Typography>
        &copy; {new Date().getFullYear()} &nbsp; Our Website. All rights
        reserved.
      </Typography>
      <Typography>
        Created by: Connor Fech, Derek Chen, Gunjan Jhaveri & Prinsa Patel
      </Typography>
    </Paper>
  );
}
