import React, { useState } from "react";
import { Box, Button, TextField, Stack, InputAdornment } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import HowToVoteIcon from "@mui/icons-material/HowToVote";

const MyComponent: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <TextField
      label="Enter your residential address"
      value={value}
      onChange={handleChange}
      placeholder="220 S. 33rd St, Philadelphia, PA 19104"
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
