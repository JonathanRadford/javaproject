import "./GameList.scss";
import Game from "../Game/Game";

const GameList = (props) => {
  return (
    <>
      <h2 className="heading">Welcome to Game Finder!</h2>
      <div className="container">
        {props.games &&
          props.games.map((game) => <Game key={game.id} game={game} />)}
      </div>
    </>
  );
};

export default GameList;
