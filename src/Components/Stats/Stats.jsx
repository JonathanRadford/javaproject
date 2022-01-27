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
  const [timeToBeat, setTimeToBeat] = useState("");

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

    setTopByTime(games);
    setTimeToBeat(topFiveTime);
    setMostPlayed(gamePlayedArr);
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
    <div className="stats">
      <div className="stats__container">
        <h1>Gaming Stats</h1>
        <button className="stats__button" onClick={handleGameTime}>
          More Info
        </button>
      </div>
      <div className="stats-graphs">
        <div className="stats-graphs__doughnut">
          <h2>Top Five Games with Most Hours</h2>

          <Doughnut data={data} />
        </div>
        <div className="stats-graphs__bar">
          <h2>Top Five Most Added Games</h2>
          <Bar data={data2} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
