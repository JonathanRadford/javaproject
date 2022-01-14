import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import GreetingList from "../../Components/GreetingList/GreetingList";

function Home() {
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
    <div>
      <Navbar />
      <GreetingList games={game} />
    </div>
  );
}

export default Home;
