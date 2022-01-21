import React, { useState, useEffect } from "react";
import "./Stats.scss";
import { Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Stats = () => {
  const [gameArray, setGameArray] = useState([]);
  const [mostPlayed, setMostPlayed] = useState([]);
  const [topByTime, setTopByTime] = useState([]);
  const [byGenre, setByGenre] = useState([]);
  const [avgTime, setAvgTime] = useState("");
  const [timeToBeat, setTimeToBeat] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const URL = `http://localhost:8080/gamefinder`;
    fetch(URL)
      .then((response) => {
        return response.json();
      })
      .then((game) => {
        setGameArray(game);
      })
      .catch((err) => err);
  }, []);

  const handleGameTime = () => {
    const topFiveGames = gameArray
      .slice()
      .sort(function (a, b) {
        return b.gameLength - a.gameLength;
      })
      .slice(0, 5);

    const games = [
      topFiveGames[0].game,
      topFiveGames[1].game,
      topFiveGames[2].game,
      topFiveGames[3].game,
      topFiveGames[4].game,
    ];

    const averageArr = gameArray
      .map((game) => game.gameLength)
      .sort(function (a, b) {
        return b - a;
      });
    const topFiveTime = averageArr.slice(0, 5);
    const gamePlayedArr = gameArray.map((game) => game.game).sort();
    const genrePlayed = gameArray.map((game) => game.genre).sort();
    const average = averageArr.reduce((a, b) => a + b) / averageArr.length;
    setTopByTime(games);
    setTimeToBeat(topFiveTime);
    setAvgTime(average);
    setMostPlayed(gamePlayedArr);
    setByGenre(genrePlayed);
  };

  const sortByFrequency = (array) => {
    let frequency = {};

    array.forEach(function (value) {
      frequency[value] = 0;
    });

    let genreSort = array.filter(function (value) {
      return ++frequency[value] === 1;
    });

    let genreSorted = genreSort.sort(function (a, b) {
      return frequency[b] - frequency[a];
    });
    return genreSorted;
  };

  const newLabel = sortByFrequency(mostPlayed);
  const topGenre = sortByFrequency(byGenre).slice(0, 5);

  console.log(topGenre);
  const sorted = (array) => {
    let frequency = {};

    array.forEach(function (value) {
      frequency[value] = 0;
    });

    let gameAppears = array.sort(function (a, b) {
      return frequency[a] - frequency[b];
    });
    const counts = [];
    for (const num of gameAppears) {
      counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
    return counts;
  };

  let mostAdded = sorted(mostPlayed);
  let arr = [
    mostAdded[newLabel[0]],
    mostAdded[newLabel[1]],
    mostAdded[newLabel[2]],
    mostAdded[newLabel[3]],
    mostAdded[newLabel[4]],
  ];

  const labels = topByTime;

  const data = {
    labels,
    datasets: [
      {
        label: "Most hours by a User",
        data: timeToBeat,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const data2 = {
    labels: newLabel.slice(0, 5),
    datasets: [
      {
        label: "Times Added",
        data: arr,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <div className="search-box">
      <div className="search-box__input">
        <button onClick={handleGameTime}></button>
      </div>
      <div className="search-box__items">
        <h1>Top Five Most Hours</h1>
        <Doughnut data={data} />
        <h1>Top Five Most Played Games</h1>
        <Bar data={data2} />
        <div className="search-box__content">
          <div className="blah">
            {/* <p>
              Average time to beat {} is {avgTime} hours.
            </p>
            <p>{labels}, are the three most played games,</p>
            <p>whilst {topGenre} are the top three genres added!</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
