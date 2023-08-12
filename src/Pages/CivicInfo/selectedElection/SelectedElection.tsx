import { ElectionItem, NormalizedAddressInput } from "../../../Interfaces.ts";
import { Box, Link, Typography } from "@mui/material";

interface selectedElectionProps {
  election: ElectionItem;
}

const selectedElectionBoxStyle = {
  display: "flex",
  flexDirection: { sm: "column", md: "row" },
};

const selectedElectionHeaderStyle = {
  fontWeight: "bold",
  textAlign: { sm: "center", md: "left" },
  marginRight: "10px",
  marginTop: { sm: "10px", md: "0px" },
};

const combineAddress = (address: NormalizedAddressInput): string => {
  if (!address) {
    return "N/A";
  }

  return (
    address.line1 +
    "\n" +
    address.city +
    ", " +
    address.state +
    " " +
    address.zip
  );
};

export const SelectedElection = ({ election }: selectedElectionProps) => {
  return (
    <Box sx={{ padding: "10px 35px" }}>
      <Typography variant={"h4"} sx={{ fontFamily: "serif" }}>
        {" "}
        {election.election.name}
      </Typography>

      <Box sx={selectedElectionBoxStyle}>
        <Typography sx={selectedElectionHeaderStyle}>Election Date:</Typography>
        <Typography>
          {election.election.electionDay
            ? election.election.electionDay
            : "N/A"}
        </Typography>
      </Box>

      <Box sx={selectedElectionBoxStyle}>
        <Typography
          sx={{
            fontWeight: "bold",
            marginRight: "10px",
            marginTop: { sm: "10px", md: "0px" },
            textAlign: { sm: "center", md: "left" },
          }}
        >
          Mailing Addr:
        </Typography>
        <Typography>
          {election.state[0]?.electionAdministrationBody?.correspondenceAddress
            ? combineAddress(
                election.state[0].electionAdministrationBody
                  .correspondenceAddress
              )
            : "N/A"}
        </Typography>
      </Box>

      <Box sx={selectedElectionBoxStyle}>
        <Typography sx={selectedElectionHeaderStyle}>Election Info:</Typography>
        <Typography>
          {election.election.electionDay
            ? election.election.electionDay
            : "N/A"}
        </Typography>
      </Box>

      <Box sx={selectedElectionBoxStyle}>
        <Typography sx={selectedElectionHeaderStyle}>
          Find Your Voting Location :
        </Typography>

        {election.state[0]?.electionAdministrationBody
          ?.votingLocationFinderUrl ? (
          <Link
            href={
              election.state[0]?.electionAdministrationBody
                ?.votingLocationFinderUrl
            }
          >
            {
              election.state[0]?.electionAdministrationBody
                ?.votingLocationFinderUrl
            }
          </Link>
        ) : (
          <Typography>"N/A"</Typography>
        )}
      </Box>

      <Box sx={selectedElectionBoxStyle}>
        <Typography sx={selectedElectionHeaderStyle}>
          Register to Vote:
        </Typography>

        {election.state[0]?.electionAdministrationBody
          ?.electionRegistrationUrl ? (
          <Link
            href={
              election.state[0]?.electionAdministrationBody
                ?.electionRegistrationUrl
            }
          >
            {
              election.state[0]?.electionAdministrationBody
                ?.electionRegistrationUrl
            }
          </Link>
        ) : (
          <Typography>"N/A"</Typography>
        )}
      </Box>

      <Box sx={selectedElectionBoxStyle}>
        <Typography sx={selectedElectionHeaderStyle}>
          More information:
        </Typography>

        {election.state[0]?.electionAdministrationBody?.electionInfoUrl ? (
          <Link
            href={
              election.state[0]?.electionAdministrationBody?.electionInfoUrl
            }
          >
            {election.state[0]?.electionAdministrationBody?.electionInfoUrl}
          </Link>
        ) : (
          <Typography>"N/A"</Typography>
        )}
      </Box>
    </Box>
  );
};
