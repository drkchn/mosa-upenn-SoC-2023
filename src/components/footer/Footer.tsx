import { BottomNavigation, Typography, useTheme } from "@mui/material";

export function Footer() {
  const theme = useTheme();

  return (
    <BottomNavigation
      sx={{
        backgroundColor: "primary.main",
        padding: "2rem",
        textAlign: "center",
        position: "absolute",
        // bottom: { sm: "0" },
        width: "100%",
        color: theme.palette.primary.contrastText,
        height: "auto",
      }}
    >
      <Typography>
        &copy; {new Date().getFullYear()} &nbsp; Our Website. All rights
        reserved.
      </Typography>
      <Typography>
        Created by: Connor Fech, Derek Chen, Gunjan Jhaveri & Prinsa Patel
      </Typography>
    </BottomNavigation>
  );
}
