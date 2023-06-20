import React, { useState } from "react";
import TextField from "@mui/material/TextField";

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
      sx={{width: "800px"}}
    />
  );
};

export function Home() {
  return (
    <div>
      <h1>Welcome to Civics Central!</h1>
      <MyComponent />
    </div>
  );
}
