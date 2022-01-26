import { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [game, setGame] = useState({
    createdBy: "",
    game: "",
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
    window.location.reload();
  };

  console.log(game.genre);
  console.log(game.console);

  return (
    <div className="form">
      <h1>Add A New Game!</h1>
      <form onSubmit={handleSubmit} className="form-input">
        <input
          type="text"
          placeholder="Your Name"
          onInput={(e) => setGame({ ...game, createdBy: e.target.value })}
        />
        <input
          type="text"
          placeholder="Game"
          onInput={(e) => setGame({ ...game, game: e.target.value })}
          required
        />
        <select
          type="text"
          placeholder="Genre"
          onInput={(e) => setGame({ ...game, genre: e.target.value })}
          required
        >
          <option value="Action/Adventure">Action/Adventure</option>
          <option value="RPG">RPG</option>
          <option value="Racing">Racing</option>
          <option value="Sports">Sports</option>
          <option value="Strategy">Strategy</option>
          <option value="Fighting">Fighting</option>
          <option value="Simulation">Simulation </option>
          <option value="FPS">FPS</option>
        </select>
        <input
          type="text"
          placeholder="Game Length"
          onInput={(e) => setGame({ ...game, gameLength: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Comments"
          onInput={(e) => setGame({ ...game, comments: e.target.value })}
        />
        <input
          type="text"
          placeholder="Add Image URL"
          onInput={(e) => setGame({ ...game, image: e.target.value })}
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
