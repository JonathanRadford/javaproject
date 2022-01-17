import "./Game.scss";

const Game = (props) => {
  const { createdBy, game, gameLength, genre, comments } = props.game;

  const handleClick = () => {};

  return (
    <div className="greeting" onClick={handleClick}>
      <h4>Game: {game}</h4>
      <p>Game Length: {gameLength} hours</p>
      <p>Added by: {createdBy}</p>
      <p>Genre: {genre}</p>
      <p>{comments}</p>
    </div>
  );
};

export default Game;
