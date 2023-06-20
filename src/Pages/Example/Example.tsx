import { Box, Button, Typography, useTheme } from "@mui/material";
import UserTable from "../../components/userTable/UserTable.tsx";
import { useEffect, useState } from "react";
import { UserData } from "../../Interfaces.ts";
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
        console.log(res);
        console.log(res.data);
        setRandomUsers(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const envTest = import.meta.env.VITE_TEST;
    console.log(envTest);

    const url = `https://google.com?apikey=${import.meta.env.VITE_API_KEY}`;
    console.log({ url });
    console.log(
      `${envTest} you can use backticks to inject the variable into a string`
    );
  }, []);

  return (
    // MUI pallet can be accessed by the string notation as seen here
    <Box
      sx={{
        backgroundColor: "secondary.dark",
      }}
    >
      <Typography variant={"h1"} color="text.primary">
        Click the button to get some random user data
      </Typography>

      {/*MUI theme can be accessed by the object notation as seen here*/}
      <Button
        data-testid={"get-users-button"}
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
