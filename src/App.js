import logo from './logo.svg';
import './App.css';
import BarChart from './components/BarChart';
import { userData } from './Data';

function App() {
  return (
    <div className="App">
         <BarChart chartData={userData} />
    </div>
  );
}

export default App;
