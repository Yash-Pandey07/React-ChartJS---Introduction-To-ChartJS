import { useState } from "react";
import './App.css';
import BarChart from './components/BarChart';
import { UserData } from './Data';
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

function App() {
  const [activeChart, setActiveChart] = useState("Bar"); // Control active chart display
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Developers Hired",
        data: UserData.map((data) => data.developersHired),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Projects Completed",
        data: UserData.map((data) => data.projectsCompleted),
        backgroundColor: [
          "#f3ba2f",
          "#50AF95",
          "#ecf0f1",
          "#2a71d0",
          "rgba(75,192,192,1)",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
      {
        label: "Revenue Generated (in thousands)",
        data: UserData.map((data) => data.revenue / 1000), // Convert to thousands
        backgroundColor: [
          "#2a71d0",
          "rgba(75,192,192,1)",
          "#50AF95",
          "#f3ba2f",
          "#ecf0f1",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // const [userData, setUserData] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [
  //     {
  //       label: "Users Gained",
  //       data: UserData.map((data) => data.userGain),
  //       backgroundColor: [
  //         "rgba(75,192,192,1)",
  //         "#ecf0f1",
  //         "#50AF95",
  //         "#f3ba2f",
  //         "#2a71d0",
  //       ],
  //       borderColor: "black",
  //       borderWidth: 2,
  //     },
  //   ],
  // });

  return (
    <div className="App">
      <header>
        <h1>Developer Insights Dashboard</h1>
        <nav>
          <ul>
            <li onClick={() => setActiveChart("Bar")}>Bar Chart</li>
            <li onClick={() => setActiveChart("Line")}>Line Chart</li>
            <li onClick={() => setActiveChart("Pie")}>Pie Chart</li>
          </ul>
        </nav>
      </header>

      <main>
        <div className="chart-container">
          {activeChart === "Bar" && <BarChart chartData={userData} />}
          {activeChart === "Line" && <LineChart chartData={userData} />}
          {activeChart === "Pie" && <PieChart chartData={userData} />}
        </div>
      </main>
    </div>
  );
}

export default App;