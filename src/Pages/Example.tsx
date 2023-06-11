import { Box, Button } from "@mui/material";
import UserTable from "../components/userTable/UserTable.tsx";
import { useState } from "react";
import { UserData } from "../Interfaces.ts";
import axios from "axios";

export function Example() {
  const [randomUsers, setRandomUsers] = useState<UserData[]>([]);

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
    <Box
      sx={{
        backgroundColor: "red",
      }}
    >
      <h1>Click the button to get some random user data</h1>
      <Button
        sx={{
          backgroundColor: "red",
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
