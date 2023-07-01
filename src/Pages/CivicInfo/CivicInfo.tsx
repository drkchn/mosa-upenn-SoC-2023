import { Box, Grid, Typography } from "@mui/material";
import {
  useAvailableElectionsContext,
  useRepresentativeDataContext,
} from "../../context/customHooks.ts";
import { useEffect } from "react";
import { AddressSearchBar } from "../../components/addressSearchBar/AddressSearchBar.tsx";

export const CivicInfo = () => {
  const representativeData = useRepresentativeDataContext();
  const availableElections = useAvailableElectionsContext();
  useEffect(() => {
    console.log({ representativeData });
    console.log({ availableElections });
  }, [representativeData, availableElections]);
  return (
    <Box>
      <AddressSearchBar isHomePage={false} />

      <Grid container>
        <Grid item md={6} sx={{ border: "3px solid red", width: "100%" }}>
          <Typography variant={"h3"}>Representative Data</Typography>
        </Grid>
        <Grid
          item
          md={3}
          sx={{
            border: "3px solid yellow",
            width: "100%",
          }}
        >
          <Typography variant={"h3"}>Upcoming Elections</Typography>
        </Grid>
        <Grid item md={3} xs sx={{ border: "3px solid green", width: "100%" }}>
          <Typography variant={"h3"}>Election Info</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};
