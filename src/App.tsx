import { useState } from "react";
import "./App.css";
import axios from "axios";
import UserTable from "./components/userTable/UserTable.tsx";
import { UserData } from "./Interfaces.ts";
import { Button } from "@mui/material";

function App() {
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
    <>
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
      <UserTable userData={randomUsers} />
    </>
  );
}

export default App;
