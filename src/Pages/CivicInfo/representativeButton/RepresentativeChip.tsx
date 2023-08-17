import { Box, Grid, Typography } from "@mui/material";
import { OfficialWithOffice } from "../../../Interfaces.ts";

interface representativeChipProps {
  official: OfficialWithOffice;
  handleClickOnOfficial: (official: OfficialWithOffice) => void;
}

export default function RepresentativeChip({
  official,
  handleClickOnOfficial,
}: representativeChipProps) {
  return (
    <Grid
      item
      md={3}
      sm={6}
      xs={6}
      sx={{
        borderRadius: "10px",
        width: "100%",
      }}
      key={official.name}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          borderRadius: "10px",
          padding: "10px 5px",
          fontSize: "auto",
          height: "115px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          "&:hover": {
            backgroundColor: "primary.dark",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            transform: "translateY(-5px) scale(1.05)",
            border: "3px solid black",
            color: "#fff",
          },
          "&:active": {
            backgroundColor: "primary.dark",
            transform: "translateY(0px) scale(1)",
            border: "3px solid black",
            transition: "all 0.1s ease-in-out",
            boxShadow: "0px 0px 5px #000",
            color: "#fff",
          },
        }}
        onClick={() => {
          handleClickOnOfficial(official);
        }}
      >
        <Typography sx={{ fontWeight: "bold" }}>
          {official.office.name}
        </Typography>
        <Typography>{official.name}</Typography>
        <Typography>
          {official.address ? official.address[0].state : "N/A"}
        </Typography>
      </Box>
    </Grid>
  );
}
