import React, { useState, useEffect } from "react";
import {
  TextField,
  InputAdornment,
  Box,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import Fade from "@mui/material/Fade";
import HomeIcon from "@mui/icons-material/Home";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import axios from "axios";
import { RepresentativeDataResponse } from "../../Interfaces";

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

export const HomePageSearchBar: React.FC = () => {
  // =================== React States ===================
  const [searchBarValue, setSearchBarValue] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>(
    "220 S. 33rd St, Philadelphia, PA 19104"
  );
  const [snackBarIsOpen, setSnackBarIsOpen] = useState<boolean>(false);
  const [buttonIsDisabled, setButtonIsDisabled] = useState<boolean>(false);
  const [googleApiErrorMessage, setGoogleApiErrorMessage] =
    useState<string>("");

  const [representativeDataResponse, setRepresentativeDataResponse] =
    useState<RepresentativeDataResponse>();
  // =================== React States ===================

  // =================== React Hooks ===================
  useEffect(() => {
    let placeholderIndex = 0;
    const interval = setInterval(() => {
      placeholderIndex = (placeholderIndex + 1) % placeholders.length;
      setPlaceholder(placeholders[placeholderIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    console.log(representativeDataResponse);
  }, [representativeDataResponse]);

  // =================== React Hooks ===================

  // =================== Helper Functions ==============

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchBarValue(event.target.value);
  };

  const handleClick = () => {
    const address = encodeAddress(searchBarValue);
    quereyRepresentativeAPI(address);
  };

  const encodeAddress = (value: string) => {
    const encodedAddress = value.trim().replaceAll(" ", "%20");
    return encodedAddress;
  };

  const quereyRepresentativeAPI = (address: string) => {
    setButtonIsDisabled(true);
    axios
      .get(
        `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&includeOffices=true&key=${
          import.meta.env.VITE_CIVICS_API_KEY
        }`
      )
      .then((res) => {
        console.log(res);
        setRepresentativeDataResponse(res.data);
      })
      .catch((err) => {
        console.log(err);
        setGoogleApiErrorMessage(err.response.data.error.message);
        setSnackBarIsOpen(true);
      })
      .finally(() => {
        setButtonIsDisabled(false);
      });
  };

  const closeSnackBar = () => {
    setSnackBarIsOpen(false);
  };

  // =================== Helper Functions ==============
  return (
    <Box sx={{ width: "80%", marginTop: "50px" }}>
      <TextField
        label="Enter your residential address"
        value={searchBarValue}
        onChange={handleChange}
        placeholder={placeholder}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <HomeIcon />
            </InputAdornment>
          ),
        }}
      />
      <Box
        sx={{
          marginTop: "20px",
          textAlign: { xs: "center", sm: "right" },
        }}
      >
        <Button
          variant="contained"
          sx={{
            width: { xs: "100%", sm: "auto" },
            textAlign: { xs: "center", sm: "right" },
            backgroundColor: "primary.light",
            maxWidth: "250px",
          }}
          color="primary"
          startIcon={<HowToVoteIcon />}
          onClick={handleClick}
          disabled={buttonIsDisabled || searchBarValue.length === 0}
        >
          Find my elections info!
        </Button>
      </Box>

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
