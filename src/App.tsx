import { useState } from "react";
import "./App.css";
import axios from "axios";
import UserTable from "./components/userTable/UserTable.tsx";
import { UserData } from "./Interfaces.ts";

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
      <button onClick={getUsers}>Get Users</button>
      <h1>Users:</h1>
      <UserTable userData={randomUsers} />
    </>
  );
}

export default App;
