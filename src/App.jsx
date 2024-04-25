import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import Newuser from "./Newuser";
import Users from "./Users";
import User from "./User";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

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

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/newuser" element={<Newuser />} />
        <Route path="/users" element={<Users />} />
        <Route
          path="/users/:userId"
          element={<User setEditUser={setEditUser} />}
        />
        <Route
          path="/users/edit/:userId"
          element={<Newuser editUser={editUser} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
