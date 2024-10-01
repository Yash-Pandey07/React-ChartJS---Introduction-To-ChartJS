import React, { useState } from 'react';
import './App.css';
import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import { UserData } from './Data';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Container, AppBar, Toolbar, Typography } from '@mui/material';

function App() {
  const [showUserInput, setShowUserInput] = useState(false);
  const [customData, setCustomData] = useState(null);
  const [chartType, setChartType] = useState('bar');

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
        label: "Revenue Generated (in millions)",
        data: UserData.map((data) => data.revenue / 1000), // Convert to thousands for better visualization
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

  const handleCustomData = (event) => {
    event.preventDefault();
    const jsonData = JSON.parse(event.target.customJson.value);

    setCustomData({
      labels: jsonData.map((data) => data.year),
      datasets: [
        {
          label: "Developers Hired",
          data: jsonData.map((data) => data.developersHired),
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
          data: jsonData.map((data) => data.projectsCompleted),
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
          label: "Revenue Generated (in millions)",
          data: jsonData.map((data) => data.revenue / 1000),
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
    setShowUserInput(false);
  };

  const renderChart = (data) => {
    switch (chartType) {
      case 'bar':
        return <BarChart chartData={data} />;
      case 'line':
        return <LineChart chartData={data} />;
      case 'pie':
        return <PieChart chartData={data} />;
      default:
        return <BarChart chartData={data} />;
    }
  };

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
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Developer Analytics Dashboard</Typography>
        </Toolbar>
      </AppBar>
      <div className="navbar">
        <Button variant="contained" onClick={() => setShowUserInput(!showUserInput)}>
          Enter Custom Data
        </Button>
        <Button variant="outlined" onClick={() => setChartType('bar')}>
          Bar Chart
        </Button>
        <Button variant="outlined" onClick={() => setChartType('line')}>
          Line Chart
        </Button>
        <Button variant="outlined" onClick={() => setChartType('pie')}>
          Pie Chart
        </Button>
      </div>

      {showUserInput && (
        <form onSubmit={handleCustomData}>
          <TextField
            name="customJson"
            rows={4}
            multiline
            fullWidth
            variant="outlined"
            placeholder='Enter your custom JSON data here'
            margin="normal"
          />
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </form>
      )}

      <div className="chart-container">
        <h2>Default Data</h2>
        {renderChart(userData)}
      </div>

      {customData && (
        <div className="chart-container">
          <h2>Custom Data</h2>
          {renderChart(customData)}
        </div>
      )}
    </Container>
  );
}

export default App;