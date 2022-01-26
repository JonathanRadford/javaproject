import React, { useState, useEffect } from "react";
import GameList from "../GameList/GameList";
import "./SearchBox.scss";
import { RangeStepInput } from "react-range-step-input";

const Search = () => {
  const [gameArray, setGameArray] = useState([]);
  const [gamePrint, setGamePrint] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [gameTime, setGameTime] = useState(0);

  useEffect(() => {
    const URL = `http://localhost:8080/gamefinder/`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((game) => {
        setGameArray(game);
      })
      .catch((err) => err);
  }, []);

  const handleGameInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase().toString());
  };

  const handleChange = (event) => {
    setGameTime(event.target.value);
    const filteredArr = gameTimeArr.filter((game) => {
      const gameLower = game.game.toLowerCase();
      return gameLower.includes(searchTerm);
    });
    setGamePrint(filteredArr);
  };

  const gameTimeArr = gameArray.filter((game) => game.gameLength > gameTime);

  return (
    <div className="search-box">
      <div className="search-box__search-functions">
        <h2>Find Game: </h2>
        <input
          onInput={handleGameInput}
          id="enter"
          className="search-box__input"
        ></input>
        <h3>Search by time: </h3>
        <RangeStepInput
          min={0}
          max={100}
          step={1}
          start={gameTime}
          onChange={handleChange}
        />
        <h3>More than {gameTime} hours.</h3>
      </div>
      <div className="search-box__items">
        <div className="search-box__content"></div>
        <GameList games={gamePrint} />
      </div>
    </div>
  );
};

export default Search;
