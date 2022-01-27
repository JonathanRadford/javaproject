import "./Game.scss";
import ModalComponent from "../Modal/Modal";

const Game = (props) => {
  const { createdBy, game, gameLength, genre, comments, image } = props.game;

  return (
    <div className="game">
      <h4>Game: {game}</h4>
      <p>Game Length: {gameLength} hours</p>
      <p>Genre: {genre}</p>
      <img src={image} alt={game} className="game__image" />
      <ModalComponent
        game={game}
        gameLength={gameLength}
        genre={genre}
        createdBy={createdBy}
        comments={comments}
        image={image}
      />
    </div>
  );
};

export default Game;
