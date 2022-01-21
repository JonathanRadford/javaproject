import Home from "../src/Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Add from "./Pages/Add/Add";
import { Route, Routes } from "react-router-dom";
import Stats from "./Pages/Stats/Stats";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>
    </div>
  );
};

export default Dashboard;
