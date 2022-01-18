import React, { useState, useEffect } from "react";
import Game from "../Game/Game";
import "./SearchBox.scss";

const Search = () => {
  const [gameArray, setGameArray] = useState([]);
  const [gameTime, setGameTime] = useState("");
  const [gamePrint, setGamePrint] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [imageArray, setImageArray] = useState([]);
  const [urlSearch, setUrlSearch] = useState("");
  const [gameImg, setGameImg] = useState("");
  const [timeToBeat, setTimeToBeat] = useState(false);

  useEffect(() => {
    const URL = `http://localhost:8080/gamefinder`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((game) => {
        setGameArray(game);
      })
      .catch((err) => err);
  }, []);

  useEffect(() => {
    const urlIMG = `https://api.rawg.io/api/games${urlSearch}?key=6cd240f4b8e945a7bd5c3ce9d5e512ac`;
    fetch(urlIMG)
      .then((response) => {
        return response.json();
      })
      .then((game) => {
        setImageArray(game);
      })
      .catch((err) => err);
  }, [urlSearch]);

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
    const url = searchTerm.replace(/\s+/g, "-").toLowerCase();
    if (url === "") {
      setUrlSearch("");
      setTimeToBeat(false);
    } else {
      setUrlSearch("/" + url);
      setTimeToBeat(true);
    }
    console.log(url);
    console.log(imageArray.results);
    const img = imageArray.results.filter((game) => game.slug.includes(url));

    console.log(img);

    const imgCover = img.map((game) => game.background_image);
    console.log(imgCover);
    setGameImg(imgCover);
    setGamePrint(avg);
    setGameTime(average);
  };

  return (
    <div className="search-box">
      <div className="search-box__input">
        <input onInput={handleInput}></input>
        <button onClick={handleClick}>Find Games!</button>
      </div>
      <div className="search-box__items">
        {timeToBeat && (
          <div className="schedule-item__content">
            <h1>
              Average time to beat {searchTerm} is {gameTime} hours.
            </h1>
          </div>
        )}

        <img src={gameImg} alt="" />
        {gamePrint &&
          gamePrint.map((game) => <Game key={game.id} game={game} />)}
      </div>
    </div>
  );
};

export default Search;
