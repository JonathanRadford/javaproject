import "./GreetingList.scss";
import Greeting from "../Greeting/Greeting";

const GreetingList = (props) => {
  return (
    <>
      <h2 className="heading">Find your Game!</h2>
      <div className="container">
        {props.games &&
          props.games.map((game) => <Greeting key={game.id} greeting={game} />)}
      </div>
    </>
  );
};

export default GreetingList;
