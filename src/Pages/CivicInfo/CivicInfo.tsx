import {
  Box,
  Grid,
  Typography,
  List,
  Snackbar,
  Alert,
  CircularProgress,
  ListItemButton,
} from "@mui/material";
import {
  getElectionResponseContext,
  getSetElectionResponseContext,
  getUserInputAddressContext,
  useAvailableElectionsContext,
  useRepresentativeDataContext,
} from "../../context/customHooks.ts";
import { useEffect, useState } from "react";
import { AddressSearchBar } from "../../components/addressSearchBar/AddressSearchBar.tsx";
import {
  Election,
  OfficialWithOffice,
  ElectionItem,
  ActualHttpResponseData,
} from "../../Interfaces.ts";
import * as React from "react";
import axios from "axios";
import Fade from "@mui/material/Fade";
import { RepresentativeModal } from "./representativeModal/RepresentativeModal.tsx";
import RepresentativeChip from "./representativeButton/RepresentativeChip.tsx";
import { SelectedElection } from "./selectedElection/SelectedElection.tsx";
import { updateLocalStorage } from "../../utilities.ts";

export const CivicInfo = () => {
  const representativeData = useRepresentativeDataContext();
  const availableElections = useAvailableElectionsContext();

  // const availableElections = {
  //   kind: "tmp",
  //   elections: [
  //     {
  //       id: "2000",
  //       name: "Presidential Election",
  //       electionDay: "2023-11-08",
  //       ocdDivisionId: "ocd-division/country:us",
  //     },
  //     {
  //       id: "2",
  //       name: "Local Council Election",
  //       electionDay: "2023-09-20",
  //       ocdDivisionId: "ocd-division/country:uk",
  //     },
  //     {
  //       id: "3",
  //       name: "State Assembly Election",
  //       electionDay: "2023-10-15",
  //       ocdDivisionId: "ocd-division/country:in",
  //     },
  //     {
  //       id: "4",
  //       name: "Mayoral Election",
  //       electionDay: "2023-12-05",
  //       ocdDivisionId: "ocd-division/country:ca",
  //     },
  //     {
  //       id: "5",
  //       name: "Parliamentary Election",
  //       electionDay: "2023-11-22",
  //       ocdDivisionId: "ocd-division/country:au",
  //     },
  //     {
  //       id: "6",
  //       name: "Regional Assembly Election",
  //       electionDay: "2023-10-30",
  //       ocdDivisionId: "ocd-division/country:ie",
  //     },
  //     {
  //       id: "7",
  //       name: "City Council Election",
  //       electionDay: "2023-09-10",
  //       ocdDivisionId: "ocd-division/country:us",
  //     },
  //     {
  //       id: "8",
  //       name: "Provincial Election",
  //       electionDay: "2023-11-18",
  //       ocdDivisionId: "ocd-division/country:ca",
  //     },
  //     {
  //       id: "9",
  //       name: "Municipal Election",
  //       electionDay: "2023-10-08",
  //       ocdDivisionId: "ocd-division/country:in",
  //     },
  //     {
  //       id: "10",
  //       name: "Senate Election",
  //       electionDay: "2023-12-15",
  //       ocdDivisionId: "ocd-division/country:au",
  //     },
  //   ],
  // };

  const electionsMap = getElectionResponseContext();

  const setElectionsMap = getSetElectionResponseContext();

  const [selectedElection, setSelectedElection] =
    React.useState<ElectionItem>();
  const [representativeModalIsOpen, setRepresentativeModalIsOpen] =
    React.useState(false);
  const [selectedOfficial, setSelectedOfficial] =
    useState<OfficialWithOffice>();

  const [apiCallInProgress, setApiCallInProgress] = useState<boolean>(false);

  // For the Google Api Error
  const [snackBarIsOpen, setSnackBarIsOpen] = useState<boolean>(false);
  const [googleApiErrorMessage, setGoogleApiErrorMessage] =
    useState<string>("");

  const userInputAddress = getUserInputAddressContext();

  const closeSnackBar = () => {
    setSnackBarIsOpen(false);
  };

  const updateMap = (key: string, value: ElectionItem) => {
    // @ts-ignore
    setElectionsMap((map) => new Map(map.set(key, value)));
  };

  const handleClose = () => setRepresentativeModalIsOpen(false);

  const handleClickOnOfficial = (official: OfficialWithOffice) => {
    setSelectedOfficial(official);
    setRepresentativeModalIsOpen(true);
  };

  const queryElectionData = (event: React.MouseEvent<HTMLElement>) => {
    if (apiCallInProgress) {
      return;
    }

    // @ts-ignore
    const electionID = event?.target?.getAttribute("data-electionid");

    if (electionsMap.has(electionID)) {
      setSelectedElection(electionsMap.get(electionID));
    } else {
      setApiCallInProgress(true);
      const requestUrl = `https://civicinfo.googleapis.com/civicinfo/v2/voterinfo?address=${userInputAddress}&electionId=${electionID}&key=${
        import.meta.env.VITE_CIVICS_API_KEY
      }`;

      let response: ActualHttpResponseData;

      axios
        .get(requestUrl)

        .then((res) => {
          updateMap(electionID, res.data);
          setSelectedElection(res.data);
          response = res;
        })
        .catch((err) => {
          // Catch any errors and show them in a snackbar
          setGoogleApiErrorMessage(err.response.data.error.message);
          setSnackBarIsOpen(true);
          response = err;
        })
        .finally(() => {
          setApiCallInProgress(false);
          updateLocalStorage(requestUrl, response, "GET");
        });
    }
  };

  useEffect(() => {
    // console.log({ representativeData });
    // console.log({ availableElections });
  }, [representativeData, availableElections]);
  return (
    <Box
      sx={{
        margin: "0px 10px 10px 10px",
      }}
    >
      <AddressSearchBar isHomePage={false} />

      {representativeData ? (
        <>
          <Typography
            variant={"h4"}
            sx={{ fontFamily: "serif", marginBottom: "20px" }}
          >
            UPCOMING ELECTIONS
          </Typography>

          <Grid container sx={{ justifyContent: "center" }}>
            <Grid
              item
              md={4}
              sx={{
                width: "100%",
              }}
            >
              <Box
                sx={{
                  padding: "0px 10px",
                  maxHeight: "300px",
                  overflowY:
                    (availableElections != undefined &&
                      availableElections.elections.length > 4) ||
                    undefined
                      ? "scroll"
                      : "none",
                }}
              >
                <List>
                  {availableElections?.elections
                    ? availableElections?.elections.map(
                        (election: Election) => (
                          <ListItemButton
                            key={election.id}
                            sx={{
                              backgroundColor: "primary.main",
                              borderRadius: "10px",
                              padding: "10px 5px",
                              margin: "10px 0px",
                              display: "flex",
                              justifyContent: "center",
                              "&:hover": {
                                cursor: "pointer",
                                backgroundColor: "primary.dark",
                                color: "#fff",
                              },
                            }}
                            disabled={apiCallInProgress}
                            data-electionid={election.id}
                            onClick={(e) => {
                              queryElectionData(e);
                            }}
                          >
                            {election.name}
                          </ListItemButton>
                        )
                      )
                    : null}
                </List>
              </Box>
            </Grid>
            <Grid
              item
              md={8}
              sx={{
                borderLeft: { sm: "none", md: "2px solid black" },
                width: "100%",
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                },
              }}
            >
              <Box
                sx={{
                  padding: "0px 10px",
                }}
              >
                {apiCallInProgress ? (
                  <CircularProgress />
                ) : selectedElection ? (
                  <SelectedElection election={selectedElection} />
                ) : (
                  <Typography
                    variant={"h4"}
                    sx={{
                      marginTop: "20px",
                      padding: "15px",
                      textAlign: "center",
                    }}
                  >
                    Select An Election
                  </Typography>
                )}
              </Box>
            </Grid>
            <Box sx={{ margin: "30px 0px 20px 0px" }}>
              <Typography variant={"h4"} sx={{ fontFamily: "serif" }}>
                REPRESENTATIVES
              </Typography>
            </Box>

            <Grid
              container
              sx={{ justifyContent: "center" }}
              rowSpacing={1}
              columnSpacing={1}
            >
              {representativeData?.officialsWithOffices
                ? representativeData?.officialsWithOffices.map(
                    (official: OfficialWithOffice) => (
                      <RepresentativeChip
                        key={official.name}
                        official={official}
                        handleClickOnOfficial={handleClickOnOfficial}
                      />
                    )
                  )
                : null}
            </Grid>
          </Grid>

          <RepresentativeModal
            representativeModalIsOpen={representativeModalIsOpen}
            handleClose={handleClose}
            selectedOfficial={selectedOfficial}
          />
        </>
      ) : (
        <Typography variant={"h4"} sx={{ marginTop: "20px" }}>
          Enter Any U.S. Address
        </Typography>
      )}

      <Snackbar
        open={snackBarIsOpen}
        autoHideDuration={6000}
        onClose={closeSnackBar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        TransitionComponent={Fade}
      >
        <Alert onClose={closeSnackBar} severity="error" sx={{ width: "100%" }}>
          {googleApiErrorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
