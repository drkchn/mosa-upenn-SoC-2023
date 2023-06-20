import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

const MyComponent: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <TextField
      label='Enter your residential address'
      value={value}
      onChange={handleChange}
      placeholder='Enter your residential address'
      fullWidth
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
