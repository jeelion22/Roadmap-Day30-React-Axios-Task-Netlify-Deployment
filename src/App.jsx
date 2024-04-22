import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import Newuser from "./Newuser";
import Users from "./Users";
import User from "./User";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/newuser" element={<Newuser />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
