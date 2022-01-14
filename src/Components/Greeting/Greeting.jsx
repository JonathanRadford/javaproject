import "./Greeting.scss";

const Greeting = (props) => {
  const { createdBy, game, gameLength, genre, description } = props.greeting;

  return (
    <div className="greeting">
      <h3>Game: {game}.</h3>
      <p>Game Length: {gameLength} hours.</p>
      <p>Added by: {createdBy}.</p>
      <p>Genre: {genre}.</p>
      <p>{description}.</p>
    </div>
  );
};

export default Greeting;
