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
    <Box sx={{ padding: { xs: "0px 0px 50px 0px", sm: "50px"},  margin: "0px 10px 60px 10px"  }}>
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
        <Grid item md={6} sx={{ border: "3px solid green", width: "100%" }}>
          <Typography variant={"h3"}>Election Info</Typography>
        </Grid>
        <Box sx={{ margin: "20px" }}>
          <Typography variant={"h3"}>Representatives</Typography>
        </Box>

        <Grid
          container
          sx={{ justifyContent: "center" }}
          rowSpacing={1}
          columnSpacing={1}
        >
          {representativeData?.officials
            ? representativeData?.officials.map((official: Official) => (
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
                      padding: "10px 0px",
                    }}
                  >
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
      </Grid>
    </Box>
  );
};
