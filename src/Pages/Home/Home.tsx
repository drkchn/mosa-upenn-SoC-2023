import React, { useState } from "react";
import { Box, Button, TextField, Stack, InputAdornment } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

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
      placeholder="123 Anywhere St, Anytown, CA 12345"
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
            sx={{
              width: "225px",
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
          height: "10vh",
          width: "80%",
          marginTop: "200px",
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
