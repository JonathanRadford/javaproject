import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  return (
    <div className="nav">
      <Link to={"/home"} className="nav__home">
        <h2>Home</h2>{" "}
      </Link>
      <Link to={"/add"} className="nav__add">
        <h2>Form</h2>{" "}
      </Link>
      <Link to={"/stats"} className="nav__stats">
        <h2>Stats</h2>{" "}
      </Link>
    </div>
  );
}

export default Navbar;
