import Modal from "@mui/material/Modal";
import { Box, Link, Typography } from "@mui/material";
import { Channel, OfficialWithOffice } from "../../../Interfaces.ts";

interface representativeModalProps {
  representativeModalIsOpen: boolean;
  handleClose: () => void;
  selectedOfficial: OfficialWithOffice | undefined;
}

export const RepresentativeModal = ({
  representativeModalIsOpen,
  handleClose,
  selectedOfficial,
}: representativeModalProps) => {
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

  const representativeDataBoxStyle = {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
  };

  const representativeDataBoxHeaderStyle = {
    fontWeight: "bold",
    marginRight: "10px",
    marginTop: { xs: "10px", sm: "0px" },
  };

  return (
    <Modal open={representativeModalIsOpen} onClose={handleClose}>
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
            <Box sx={representativeDataBoxStyle}>
              <Typography
                variant={"h4"}
                sx={{ textAlign: "center", width: "100%" }}
              >
                {selectedOfficial.name}
              </Typography>
            </Box>
            <Box sx={representativeDataBoxStyle}>
              <Typography sx={representativeDataBoxHeaderStyle}>
                Office:
              </Typography>
              <Typography>
                {selectedOfficial.office.name
                  ? selectedOfficial.office.name
                  : "N/A"}
              </Typography>
            </Box>
            <Box sx={representativeDataBoxStyle}>
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
            <Box sx={representativeDataBoxStyle}>
              <Typography sx={representativeDataBoxHeaderStyle}>
                Party:
              </Typography>
              <Typography>
                {selectedOfficial.party ? selectedOfficial.party : "N/A"}
              </Typography>
            </Box>
            <Box sx={representativeDataBoxStyle}>
              <Typography sx={representativeDataBoxHeaderStyle}>
                Phone:
              </Typography>
              <Typography>
                {selectedOfficial.phones && selectedOfficial.phones[0]
                  ? selectedOfficial.phones[0]
                  : "N/A"}
              </Typography>
            </Box>
            <Box sx={representativeDataBoxStyle}>
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

            <Box sx={representativeDataBoxStyle}>
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

            <Box sx={representativeDataBoxStyle}>
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
  );
};
