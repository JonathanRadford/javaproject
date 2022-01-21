import React, { useState, useEffect } from "react";
import Game from "../Game/Game";
import "./SearchBox.scss";

const Search = () => {
  const [gameArray, setGameArray] = useState([]);
  const [gameTime, setGameTime] = useState("");
  const [gamePrint, setGamePrint] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [timeToBeat, setTimeToBeat] = useState(false);

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
    console.log(gameArray);
    const filteredArr = gameArray.filter((game) =>
      game.game.toLowerCase().includes(searchTerm)
    );
    const mappedArr = filteredArr.map((game) => game.gameLength);
    const average = mappedArr.reduce((a, b) => a + b) / mappedArr.length;
    if (searchTerm === null || searchTerm === false) {
      setTimeToBeat(false);
    } else {
      setTimeToBeat(true);
    }
    setGameTime(average);
    setGamePrint(filteredArr);
  };

  return (
    <div className="search-box">
      <div className="search-box__input">
        <input onInput={handleInput}></input>
      </div>
      <div className="search-box__items">
        <div className="search-box__content">
          {timeToBeat && (
            <h1>
              Average time to beat {searchTerm} is {gameTime} hours.
            </h1>
          )}
        </div>

        {gamePrint &&
          gamePrint.map((game) => <Game key={game.id} game={game} />)}
      </div>
    </div>
  );
};

export default Search;

// const [imageArray, setImageArray] = useState([]);
// const [urlSearch, setUrlSearch] = useState("");
// const [gameImg, setGameImg] = useState("");

// useEffect(() => {
//   const urlIMG = `https://api.rawg.io/api/games${urlSearch}?key=6cd240f4b8e945a7bd5c3ce9d5e512ac`;
//   fetch(urlIMG)
//     .then((response) => {
//       return response.json();
//     })
//     .then((game) => {
//       setImageArray(game);
//     })
//     .catch((err) => err);
// }, [urlSearch]);

// const img = imageArray.results.filter((game) => game.slug.includes(url));
// const imgCover = img.map((game) => game.background_image);
// setGameImg(imgCover);

// const url = searchTerm.replace(/\s+/g, "-").toLowerCase();
// if (url === "") {
//   setUrlSearch("");
// } else {
//   setUrlSearch(url);
// }

/* <img src={gameImg} alt="" className="search-box__img" /> */
