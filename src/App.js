import logo from './logo.svg';
import './App.css';
import Demofile from './Demo folder/Demofile';
import City from './container/City'; //Class base Component
import CityFunc from './container/CityFunc'; //Function base Component

function App() {
  return (
    <div className="App">
      <CityFunc/>
      <City/>

    </div>
  );
}

export default App;
