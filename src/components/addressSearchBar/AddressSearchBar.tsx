import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  InputAdornment,
  Snackbar,
  TextField,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import HomeIcon from "@mui/icons-material/Home";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import axios from "axios";
import {
  getSetUserInputAddressContext,
  getUserInputAddressContext,
  useSetAvailableElectionsContext,
  useSetRepresentativeDataContext,
} from "../../context/customHooks.ts";
import { useNavigate } from "react-router-dom";
import {
  ActualHttpResponseData,
  OfficialWithOffice,
  RepresentativeDataResponse,
} from "../../Interfaces.ts";
import { updateLocalStorage } from "../../utilities.ts";

const placeholders = [
  "740 S. Magnolia Rd, Gastonia, NC 28052",
  "9068 Saxon St, Wheaton, IL 60187",
  "7696 N. Grand St, Buckeye, AZ 85326",
  "20 W. Buttonwood St, Littleton, CO 80123",
  "521 Sussex Lane, Louisville, KY 40207",
  "38917 Fremont Rd, Carmel, NY 10512",
  "1250 N. Lantern Lane, Cocoa, FL 32927",
  "47 Lake Forest Ave, Apple Valley, CA 92307",
  "220 S. 33rd St, Philadelphia, PA 19104",
];

interface AddressSearchBarProps {
  isHomePage: boolean;
}

export const AddressSearchBar = ({ isHomePage }: AddressSearchBarProps) => {
  // =================== React States ===================

  const userInputAddress = getUserInputAddressContext();

  const [userAddress, setUserAddress] = useState<string>(
    userInputAddress ? userInputAddress : ""
  );
  const [placeholder, setPlaceholder] = useState<string>(
    "220 S. 33rd St, Philadelphia, PA 19104"
  );
  const [snackBarIsOpen, setSnackBarIsOpen] = useState<boolean>(false);
  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(false);
  const [googleApiErrorMessage, setGoogleApiErrorMessage] =
    useState<string>("");

  const [representativeCallSuccessful, setRepresentativeCallSuccessful] =
    useState<boolean>(false);
  const [electionCallSuccessful, setElectionCallSuccessful] =
    useState<boolean>(false);

  // =================== React States ===================

  // =================== React Hooks ===================

  // Allows us to navigate to a new url
  const navigate = useNavigate();

  // Getting access to setters from context
  const setRepresentativeDataResponse: any = useSetRepresentativeDataContext();
  const setAvailableElections: any = useSetAvailableElectionsContext();
  const setUserInputAddress: any = getSetUserInputAddressContext();
  // For changing address
  useEffect(() => {
    let placeholderIndex = 0;
    const interval = setInterval(() => {
      placeholderIndex = (placeholderIndex + 1) % placeholders.length;
      setPlaceholder(placeholders[placeholderIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Only navigate if both our calls were successful, and we are still on the home page
  useEffect(() => {
    if (representativeCallSuccessful && electionCallSuccessful && isHomePage) {
      navigate("/civicInformation");
    }
  });

  // =================== React Hooks ===================

  // =================== Helper Functions ==============

  // Updates the state of the search bar value when typing
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserAddress(event.target.value);
  };

  const handleClick = () => {
    setUserInputAddress(userAddress);
    const address = encodeAddress(userAddress);
    queryRepresentativeAPI(address);
  };

  // Have to change spaces in the entered address to %20 to send over and http call
  const encodeAddress = (value: string) => {
    return value.trim().replaceAll(" ", "%20");
  };

  const queryRepresentativeAPI = (address: string) => {
    setButtonIsDisabled(true);

    const requestUrl = `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&includeOffices=true&key=${
      import.meta.env.VITE_CIVICS_API_KEY
    }`;

    let response: ActualHttpResponseData;

    axios
      .get(requestUrl)
      .then((res) => {
        // console.log(res);

        // Format response to map officials to offices
        const representativeData: RepresentativeDataResponse = res.data;

        const officialsWithOffices: OfficialWithOffice[] = [];

        for (const office of representativeData.offices) {
          let officialWithOffice: OfficialWithOffice;
          for (const officialIndex of office.officialIndices) {
            officialWithOffice = {
              ...representativeData.officials[officialIndex],
              office: office,
            };

            officialsWithOffices.push(officialWithOffice);
          }
        }

        representativeData.officialsWithOffices = officialsWithOffices;

        setRepresentativeDataResponse(representativeData);
        setRepresentativeCallSuccessful(true);

        response = res;
      })
      .catch((err) => {
        // Catch any errors in the api chain
        // console.log(err);
        setGoogleApiErrorMessage(err.response.data.error.message);
        setSnackBarIsOpen(true);
        response = err.response;
      })
      .finally(() => {
        // Call the query for elections API after the representative call is successful
        updateLocalStorage(requestUrl, response, "GET");
        queryAvailableElectionsAPI();
      });
  };

  const queryAvailableElectionsAPI = () => {
    const requestUrl = `https://www.googleapis.com/civicinfo/v2/elections?key=${
      import.meta.env.VITE_CIVICS_API_KEY
    }`;
    let response: ActualHttpResponseData;
    axios
      .get(requestUrl)
      .then((res) => {
        // Setting the state on successful response
        setAvailableElections(res.data);
        setElectionCallSuccessful(true);
        response = res;
      })
      .catch((err) => {
        // console.log(err);
        if (!snackBarIsOpen) {
          setGoogleApiErrorMessage(err.response.data.error.message);
          setSnackBarIsOpen(true);
        }
        response = err.response;
      })
      .finally(() => {
        setButtonIsDisabled(false);
        updateLocalStorage(requestUrl, response, "GET");
      });
  };

  const closeSnackBar = () => {
    setSnackBarIsOpen(false);
  };

  // =================== Helper Functions ==============

  // =================== Custom Styles ==============
  const homePageStyling = {
    width: "80%",
    marginTop: "50px",
    display: "block",
    flexDirection: "column",
    textAlign: "right",
    margin: "auto",
  };

  const informationPageStyling = {
    width: "80%",
    marginTop: "50px",
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    textAlign: "center",
    margin: "50px auto",
  };

  return (
    <Box sx={isHomePage ? homePageStyling : informationPageStyling}>
      <TextField
        label="Enter your residential address"
        value={userAddress}
        onChange={handleChange}
        placeholder={placeholder}
        fullWidth
        // sx={{
        //   autofill: {
        //     color: "red",
        //   }
        // }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && userAddress.trim().length !== 0) {
            handleClick();
          }
        }}
        // inputProps={}
        // sx={{
        //   "& label.Mui-focused": {
        //     color: "secondary.main",
        //   },
        //   "& .MuiOutlinedInput-root": {
        //     "&.Mui-focused fieldset": {
        //       borderColor: "secondary.main",
        //     },
        //   },
        // }}
        // sx={{
        //   "&:hover .MuiOutlinedInput-notchedOutline": {
        //     borderColor: "secondary.light", // Set the desired hover color
        //   },
        //   "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
        //     borderColor: "secondary.main !important", // Set the desired focus color
        //   },
        // }}
        // InputLabelProps={{
        //   color: "secondary",
        // }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HomeIcon />
            </InputAdornment>
          ),
          sx: {
            "-webkit-autofill": {
              color: "red",
            },
          },
        }}
      />
      <Button
        variant="contained"
        sx={{
          width: { xs: "100%", sm: "inherit" },
          textAlign: { xs: "center", sm: "right" },
          maxWidth: "250px",
          marginTop: isHomePage ? "20px" : "0px",
          "&:hover": {
            transform: "translateY(-2px) scale(1.04)",
            transition: "all 0.3s ease-in-out",
          },
          "&:active": {
            transform: "translateY(0px) scale(1)",
            transition: "all 0.1s ease-in-out",
          },
        }}
        color="primary"
        startIcon={<HowToVoteIcon />}
        onClick={handleClick}
        disabled={buttonIsDisabled || userAddress.trim().length === 0}
      >
        Find my elections info!
      </Button>

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
