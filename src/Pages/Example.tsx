import { Box, Button, Typography, useTheme } from "@mui/material";
import UserTable from "../components/userTable/UserTable.tsx";
import { useEffect, useState } from "react";
import { UserData } from "../Interfaces.ts";
import axios from "axios";

export function Example() {
  const [randomUsers, setRandomUsers] = useState<UserData[]>([]);

  // Get theme object from MUI
  const theme = useTheme();

  // Check the console to view the theme object
  useEffect(() => {
    console.log(theme);
  });

  const getUsers = async () => {
    axios
      .get("https://randomuser.me/api/?results=5")
      .then((res) => {
        console.log(res.data);
        setRandomUsers(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    // MUI pallete can be accessed by the string notation as seen here
    <Box
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Typography variant={"h1"} color="text.disabled">
        Click the button to get some random user data
      </Typography>

      {/*MUI theme can be accessed by the object notation as seen here*/}
      <Button
        sx={{
          backgroundColor: theme.palette.secondary.main,
        }}
        variant="outlined"
        onClick={getUsers}
      >
        Get Users
      </Button>
      <h1>Users:</h1>
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          paddingBottom: "50px",
        }}
      >
        <UserTable userData={randomUsers} />
      </Box>
    </Box>
  );
}