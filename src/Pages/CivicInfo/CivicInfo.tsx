import { Box, Grid, Typography } from "@mui/material";
import {
  useAvailableElectionsContext,
  useRepresentativeDataContext,
} from "../../context/customHooks.ts";
import { useEffect } from "react";
import { AddressSearchBar } from "../../components/addressSearchBar/AddressSearchBar.tsx";
import { Official } from "../../Interfaces.ts";

export const CivicInfo = () => {
  const representativeData = useRepresentativeDataContext();
  const availableElections = useAvailableElectionsContext();
  useEffect(() => {
    console.log({ representativeData });
    console.log({ availableElections });
  }, [representativeData, availableElections]);
  return (
    <Box sx={{ padding: { xs: "0px", sm: "100px" } }}>
      <AddressSearchBar isHomePage={false} />

      <Grid container sx={{ justifyContent: "center" }}>
        <Grid
          item
          md={6}
          sx={{
            border: "3px solid yellow",
            width: "100%",
          }}
        >
          <Typography variant={"h3"}>Upcoming Elections</Typography>
        </Grid>
        <Grid item md={6} xs sx={{ border: "3px solid green", width: "100%" }}>
          <Typography variant={"h3"}>Election Info</Typography>
        </Grid>

        {representativeData?.officials
          ? representativeData?.officials.map((official: Official) => (
              <Grid
                item
                xs={3}
                sx={{
                  border: "1px solid black",
                  borderRadius: "10px",
                  width: "100%",
                  margin: "10px",
                }}
                key={official.name}
              >
                <Box sx={{ backgroundColor: "primary.main" }}>
                  <Typography>{official.name}</Typography>
                  <Typography>
                    {official.address ? official.address[0].state : "N/A"}
                  </Typography>
                  <Typography>
                    {official.phones ? official.phones[0] : "N/A"}
                  </Typography>
                </Box>
              </Grid>
            ))
          : null}
      </Grid>
    </Box>
  );
};
