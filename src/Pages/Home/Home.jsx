import React from "react";
import GameCarousel from "../../Components/GameCarousel/GameCarousel";
import SearchBox from "../../Components/SearchBox/SearchBox";
import "./Home.scss";

const Home = () => {
  return (
    <div className="GameList">
      <h1 className="GameList__header">Welcome to GameFinder.</h1>
      <GameCarousel />
      <SearchBox />
    </div>
  );
};

export default Home;
