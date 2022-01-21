import React from "react";
// import { useState, useEffect } from "react";
// import GameList from "../../Components/GameList/GameList";
import SearchBox from "../../Components/SearchBox/SearchBox";
import "./Home.scss";

const Home = () => {
  //   const [game, setGame] = useState([]);

  //   const getGame = () => {
  //     fetch("http://localhost:8080/gamefinder")
  //       .then((res) => res.json())
  //       .then((json) => setGame(json))
  //       .catch((err) => err);
  //   };

  //   useEffect(() => {
  //     getGame();
  //   }, []);

  return (
    <div className="GameList">
      <h1 className="GameList__header">Welcome to GameFinder.</h1>
      <SearchBox />
      {/* <GameList games={game} /> */}
    </div>
  );
};

export default Home;
