import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./Navbar";
import Newuser from "./Newuser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/newuser" element={<Newuser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
