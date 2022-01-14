import "./GameList.scss";
import Game from "../Game/Game";

const GreetingList = (props) => {
  return (
    <>
      <h2 className="heading">Find your Game!</h2>
      <div className="container">
        {props.games &&
          props.games.map((game) => <Game key={game.id} greeting={game} />)}
      </div>
    </>
  );
};

export default GreetingList;
