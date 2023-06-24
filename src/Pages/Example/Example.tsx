import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import UserTable from "./userTable/UserTable.tsx";
import { useEffect, useState } from "react";
import { UserData } from "../../Interfaces.ts";
import axios from "axios";
import { ExampleList } from "./exampleList/ExampleList.tsx";
import { ExampleSearchBar } from "./ExampleSearchBar.tsx";

export function Example() {
  const [randomUsers, setRandomUsers] = useState<UserData[]>([]);
  const [listItems, setListItems] = useState<string[]>([]);

  // Get theme object from MUI
  const theme = useTheme();

  // Check the console to view the theme object
  useEffect(() => {
    // console.log(theme);
    getFromLocalStorage();
  }, []);

  useEffect(() => {
    console.log(theme);
  });

  /**
   * Get the example list from local storage on component mount
   */
  const getFromLocalStorage = () => {
    const list = JSON.parse(localStorage.getItem("example-list") || "[]");
    setListItems(list);
  };

  const updateExampleList = (exampleList: string[]) => {
    console.log("called");
    console.log(exampleList);
    setListItems(exampleList);
  };

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
    <Box>
      <Grid container>
        <Grid item sm={8} sx={{ border: "3px solid red", overflowX: "scroll" }}>
          <Typography variant={"h4"} color="text.primary">
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
          <UserTable userData={randomUsers} />
        </Grid>

        <Grid
          item
          sm={1}
          sx={{
            border: "3px solid yellow",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Divider orientation="vertical" flexItem />
        </Grid>
        <Grid item sm={3} xs sx={{ border: "3px solid green" }}>
          <ExampleSearchBar updateExampleList={updateExampleList} />
          <ExampleList
            listItems={listItems}
            updateExampleList={updateExampleList}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
