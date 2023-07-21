import { Box, Grid, Link, ListItem, Typography, List } from "@mui/material";
import {
  useAvailableElectionsContext,
  useRepresentativeDataContext,
} from "../../context/customHooks.ts";
import { useEffect, useState } from "react";
import { AddressSearchBar } from "../../components/addressSearchBar/AddressSearchBar.tsx";
import { Channel, Election, OfficialWithOffice } from "../../Interfaces.ts";
import Modal from "@mui/material/Modal";
import * as React from "react";

export const CivicInfo = () => {
  const representativeData = useRepresentativeDataContext();
  const availableElections = useAvailableElectionsContext();

  const [open, setOpen] = React.useState(false);
  const [selectedOfficial, setSelectedOfficial] =
    useState<OfficialWithOffice>();

  const modalStyle = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    maxWidth: "800px",
    height: "fit-content",
    minHeight: "60%",
    bgcolor: "background.paper",
    border: "3px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
  };

  const representativeeDataBoxStyle = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
  };

  const representativeDataBoxHeaderStyle = {
    fontWeight: "bold",
    marginRight: "10px",
    marginTop: { xs: "10px", sm: "0px" },
  };

  const handleClose = () => setOpen(false);

  const handleClickOnOfficial = (official: OfficialWithOffice) => {
    setSelectedOfficial(official);
    setOpen(true);
  };

  const queryElectionData = (id: any) => {
    const electionID = id.target.getAttribute("data-electionID");

    console.log(electionID);
  };

  useEffect(() => {
    console.log({ representativeData });
    console.log({ availableElections });
  }, [representativeData, availableElections]);
  return (
    <Box
      sx={{
        padding: { xs: "0px 0px 50px 0px", sm: "50px" },
        margin: "0px 10px 60px 10px",
      }}
    >
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
          <Box>
            <List>
              {availableElections?.elections
                ? availableElections?.elections.map((election: Election) => (
                    <ListItem
                      sx={{
                        backgroundColor: "primary.main",
                        "&:hover": { cursor: "pointer" },
                      }}
                      data-electionID={election.id}
                      onClick={(e) => {
                        queryElectionData(e);
                      }}
                    >
                      {election.name}
                    </ListItem>
                  ))
                : null}
            </List>
          </Box>
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
          {representativeData?.officialsWithOffices
            ? representativeData?.officialsWithOffices.map(
                (official: OfficialWithOffice) => (
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
                        },
                        "&:active": {
                          backgroundColor: "primary.dark",
                          transform: "translateY(0px) scale(1)",
                          border: "3px solid black",
                          transition: "all 0.1s ease-in-out",
                          boxShadow: "0px 0px 5px #000",
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
                )
              )
            : null}
        </Grid>
      </Grid>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography
            sx={{
              position: "absolute",
              top: "15px",
              right: "25px",
              fontSize: "20px",
              fontWeight: "500",
              "&:hover": {
                cursor: "pointer",
                color: "secondary.light",
              },
              "&:active": {
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                transform: "scale(.95) translateY(2px)",
                color: "secondary.light",
              },
            }}
            onClick={handleClose}
          >
            X
          </Typography>

          {selectedOfficial ? (
            <>
              <Box sx={representativeeDataBoxStyle}>
                <Typography
                  variant={"h4"}
                  sx={{ textAlign: "center", width: "100%" }}
                >
                  {selectedOfficial.name}
                </Typography>
              </Box>
              <Box sx={representativeeDataBoxStyle}>
                <Typography sx={representativeDataBoxHeaderStyle}>
                  Office:
                </Typography>
                <Typography>
                  {selectedOfficial.office.name
                    ? selectedOfficial.office.name
                    : "N/A"}
                </Typography>
              </Box>
              <Box sx={representativeeDataBoxStyle}>
                <Typography sx={representativeDataBoxHeaderStyle}>
                  Role(s):
                </Typography>
                {selectedOfficial.office.roles
                  ? selectedOfficial.office.roles.map((role: string) => (
                      <Typography key={role} sx={{ marginLeft: "5px" }}>
                        {role.toLowerCase()}
                      </Typography>
                    ))
                  : "N/A"}
              </Box>
              <Box sx={representativeeDataBoxStyle}>
                <Typography sx={representativeDataBoxHeaderStyle}>
                  Party:
                </Typography>
                <Typography>
                  {selectedOfficial.party ? selectedOfficial.party : "N/A"}
                </Typography>
              </Box>
              <Box sx={representativeeDataBoxStyle}>
                <Typography sx={representativeDataBoxHeaderStyle}>
                  Phone:
                </Typography>
                <Typography>
                  {selectedOfficial.phones && selectedOfficial.phones[0]
                    ? selectedOfficial.phones[0]
                    : "N/A"}
                </Typography>
              </Box>
              <Box sx={representativeeDataBoxStyle}>
                <Typography sx={representativeDataBoxHeaderStyle}>
                  Website:
                </Typography>
                {selectedOfficial.urls ? (
                  <Link href={selectedOfficial.urls[0]} target="_blank">
                    {selectedOfficial.urls[0]}
                  </Link>
                ) : (
                  "N/A"
                )}
              </Box>

              <Box sx={representativeeDataBoxStyle}>
                <Typography sx={representativeDataBoxHeaderStyle}>
                  Address:
                </Typography>
                <Typography>
                  {selectedOfficial.address && selectedOfficial.address[0]
                    ? selectedOfficial.address[0].line1 +
                      " " +
                      selectedOfficial.address[0].city +
                      ", " +
                      selectedOfficial.address[0].state +
                      " " +
                      selectedOfficial.address[0].zip
                    : "N/A"}
                </Typography>
              </Box>

              <Box sx={representativeeDataBoxStyle}>
                <Typography sx={representativeDataBoxHeaderStyle}>
                  Social Media:
                </Typography>
                <Typography>
                  {selectedOfficial.channels
                    ? selectedOfficial.channels.map(
                        (channel: Channel) =>
                          channel.type + ": " + channel.id + "\t"
                      )
                    : "N/A"}
                </Typography>
              </Box>
            </>
          ) : (
            "N/A"
          )}
        </Box>
      </Modal>
    </Box>
  );
};
