import { createContext, useEffect, useState } from "react";
import axios from "axios";

const UsersContext = createContext();

async function getUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    // console.log(response)

    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error(`Failed to fetch users ${error}`));
  }, []);

  return (
    <UsersContext.Provider value={{ users }}>{children}</UsersContext.Provider>
  );
};

export default UsersContext;
