import React, { useState, useEffect } from "react";

const Search = () => {
  const [gameArray, setGameArray] = useState([]);
  const [gameTime, setGameTime] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const URL = `http://localhost:8080/gamefinder`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((game) => {
        setGameArray(game);
        //console.log(setGameObj(game));
      })
      .catch((err) => err);
  }, []);

  const handleInput = (event) => {
    const searchInput = event.target.value.toLowerCase().toString();
    setSearchTerm(searchInput);
  };

  const handleClick = () => {
    const avg = gameArray.filter((game) =>
      game.game.toLowerCase().includes(searchTerm)
    );
    const avgLength = avg.map((game) => game.gameLength);
    const average = avgLength.reduce((a, b) => a + b) / avgLength.length;
    setGameTime(average);
  };
  return (
    <div className="search-box">
      <button onClick={handleClick} />
      <input onInput={handleInput}></input>
      <h1>{gameTime}</h1>
    </div>
  );
};

export default Search;
