import "./Game.scss";

const Game = (props) => {
  const { createdBy, game, gameLength, genre, comments, image, console } =
    props.game;
  return (
    <div className="game">
      <h4>Game: {game}</h4>
      <p>Game Length: {gameLength} hours</p>
      <p>Added by: {createdBy}</p>
      <p>Genre: {genre}</p>
      <p>Console: {console}</p>
      <p>{comments}</p>
      <img src={image} alt={game} className="game__image" />
    </div>
  );
};

export default Game;
