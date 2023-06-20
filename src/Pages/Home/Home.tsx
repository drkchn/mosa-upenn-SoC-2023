import React, { useState } from "react";
import { Box, Button, TextField, Stack } from "@mui/material";

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
        height: "70vh",
      }}
    >
      <div>
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
      </div>
    </Box>
  );
}
