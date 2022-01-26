import React, { useState, useEffect } from "react";
import "./GameCarousel.scss";

const GameCarousel = () => {
  const [game, setGame] = useState([]);
  const [counter, setCounter] = useState(0);

  const getGame = () => {
    fetch(`http://localhost:8080/gamefinder/`)
      .then((res) => res.json())
      .then((json) => setGame(json))
      .catch((err) => err);
  };
  useEffect(() => {
    getGame();
  }, []);

  const gameImg = game.filter((game) => game.image).map((game) => game.image);
  const handleIncrement = () => {
    if (counter === gameImg.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(gameImg.length - 1);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <div>
      <div className="carousel">
        <img
          src={gameImg[counter]}
          alt=""
          className="carousel__image"
          data-interval="3000"
        />
        <button
          className="carousel__button carousel__button--left"
          onClick={handleIncrement}
        >
          &#8592;
        </button>
        <button
          className="carousel__button carousel__button--right"
          onClick={handleDecrement}
        >
          &#8594;
        </button>
      </div>
    </div>
  );
};

export default GameCarousel;
