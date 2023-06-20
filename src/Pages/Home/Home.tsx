import React, { useState, useEffect } from "react";
import { Box, Button, TextField, Stack, InputAdornment } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

const placeholders = [
  "740 S. Magnolia Rd, Gastonia, NC 28052",
  "9068 Saxon St, Wheaton, IL 60187",
  "7696 N. Grand St, Buckeye, AZ 85326",
];

const MyComponent: React.FC = () => {
  const [value, setValue] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>(
    "220 S. 33rd St, Philadelphia, PA 19104"
  );

  useEffect(() => {
    let placeholderIndex = 0;
    const interval = setInterval(() => {
      placeholderIndex = (placeholderIndex + 1) % placeholders.length;
      setPlaceholder(placeholders[placeholderIndex]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <TextField
      label="Enter your residential address"
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      sx={{ width: "800px" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <HomeIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "75vh",
        marginTop: "0vh",
        bgcolor: "secondary.main",
      }}
    >
      <h1>Welcome to Civics Central!</h1>
      <h3>Enter your residential address and we'll take it from here!</h3>

      <Stack spacing={2}>
        <MyComponent />
        <Box sx={{ width: "800px", textAlign: "right" }}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<HowToVoteIcon />}
            sx={{
              width: "250px",
              backgroundColor: "primary.light",
            }}
          >
            Find my elections info!
          </Button>
        </Box>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          height: "5vh",
          width: "80%",
          marginTop: "10vh",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <h3>About our Summer of Code project</h3>
          <p>
            Our website aims to encourage users to participate in democracy by
            making it easier to access elections information.
          </p>
          <p>
            When a user inputs their residential address, our website will
            display information based on any upcoming U.S. elections! Try it
            out!
          </p>
        </div>
      </Box>
    </Box>
  );
}
