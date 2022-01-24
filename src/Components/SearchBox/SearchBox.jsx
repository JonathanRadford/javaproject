import React, { useState, useEffect } from "react";
import GameList from "../GameList/GameList";
import "./SearchBox.scss";

const Search = () => {
  const [gameArray, setGameArray] = useState([]);
  // const [gameTime, setGameTime] = useState("");
  // const [gamePrint, setGamePrint] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleInput = (event) => {
    setSearchTerm(event.target.value.toLowerCase().toString());
  };

  const filteredArr = gameArray.filter((game) => {
    const albumTitleLower = game.game.toLowerCase();
    return albumTitleLower.includes(searchTerm);
  });

  // const handleAvg = () => {
  //   const mappedArr = filteredArr.map((game) => game.gameLength);
  //   const average = mappedArr.reduce((a, b) => a + b) / mappedArr.length;
  //   setGameTime(average);
  //   setGamePrint(true);
  // };

  return (
    <div className="search-box">
      <div className="search-box__input">
        <input onInput={handleInput} id="enter"></input>
        {/* <button onClick={handleAvg}>sdf</button> */}
      </div>
      <div className="search-box__items">
        <div className="search-box__content">
          {/* {gamePrint && (
            <h1>
              Average time to beat {searchTerm} is {gameTime} hours.
            </h1>
          )} */}
        </div>
        <GameList games={filteredArr} />
      </div>
    </div>
  );
};

export default Search;
