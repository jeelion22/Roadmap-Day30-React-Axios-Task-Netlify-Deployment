import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import Newuser from "./components/Newuser";
import Users from "./components/Users";
import User from "./components/User";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/Home";

function App() {
  const userInfo = {
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  };
  const [editUser, setEditUser] = useState(userInfo);
  const location = useLocation();

  useEffect(() => {
    console.log("current path: ", location.pathname);
    if (["/users", "/newuser", "/"].includes(location.pathname))
      setEditUser(userInfo);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newuser" element={<Newuser editUser={editUser} />} />
        <Route path="/users" element={<Users />} />
        <Route
          path="/users/:userId"
          element={<User setEditUser={setEditUser} />}
        />
        <Route
          path="/users/edit/:userId"
          element={
            <Newuser
              editUser={editUser}
              userInfo={userInfo}
              setEditUser={setEditUser}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
