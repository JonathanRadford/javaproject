import Home from "../src/Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Add from "./Pages/Add/Add";
import { Route, Routes } from "react-router-dom";
import Search from "./Pages/Search/Search";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
