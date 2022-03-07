import HomePage from "./pages/homepage";
import Login from "./pages/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/profile/profile";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Login />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
