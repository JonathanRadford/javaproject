import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const handleClick = () => {
    console.log("clicked");
  };
  return (
    <div className="nav">
      <Link to={"/home"} onClick={handleClick} className="nav__home">
        <h2>Home</h2>{" "}
      </Link>
      <Link to={"/add"} className="nav__add">
        <h2>Form</h2>{" "}
      </Link>
      <Link to={"/search"} className="nav__search">
        <h2>Search</h2>{" "}
      </Link>
    </div>
  );
}

export default Navbar;
