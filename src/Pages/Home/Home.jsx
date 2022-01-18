import React from "react";
import { useState, useEffect } from "react";
import GameList from "../../Components/GameList/GameList";
import "./Home.scss";

const Home = () => {
  const [game, setGame] = useState([]);

  const getGame = () => {
    fetch("http://localhost:8080/gamefinder")
      .then((res) => res.json())
      .then((json) => console.log(setGame(json)))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getGame();
  }, []);

  return (
    <div className="GameList">
      <h1 className="GameList__header">Welcome to GameFinder.</h1>
      <GameList games={game} />
    </div>
  );
};

export default Home;
