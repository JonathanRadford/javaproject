import { useState } from "react";
import "./Form.scss";

// form styles jacked from here
// https://codepen.io/banunn/pen/AFnal

const Form = () => {
  const [game, setGame] = useState({
    createdBy: "",
    greeting: "",
    originCountry: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/gamefinder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div className="log-form">
      <h2>Add A New Game</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          onInput={(e) => setGame({ ...game, createdBy: e.target.value })}
        />
        <input
          type="text"
          placeholder="Game"
          onInput={(e) => setGame({ ...game, game: e.target.value })}
        />
        <input
          type="text"
          placeholder="Genre"
          onInput={(e) => setGame({ ...game, genre: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          onInput={(e) => setGame({ ...game, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Game Length"
          onInput={(e) => setGame({ ...game, gameLength: e.target.value })}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
