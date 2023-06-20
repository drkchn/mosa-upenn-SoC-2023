import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

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
        <h2>Enter your residential address and we'll take it from here!</h2>
        <MyComponent />
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: "225px",
          }}
        >
          Find my elections info!
        </Button>
      </div>
    </Box>
  );
}
