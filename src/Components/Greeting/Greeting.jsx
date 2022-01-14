import "./Greeting.scss";

const Greeting = (props) => {
  const { createdBy, game, gameLength, genre, description } = props.greeting;

  const handleClick = () => {};

  return (
    <div className="greeting" onClick={handleClick}>
      <h4>Game: {game}</h4>
      <p>Game Length: {gameLength} hours</p>
      <p>Added by: {createdBy}</p>
      <p>Genre: {genre}</p>
      <p>{description}</p>
    </div>
  );
};

export default Greeting;
