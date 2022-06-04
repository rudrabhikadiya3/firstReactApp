import logo from './logo.svg';
import './App.css';
import Demofile from './Demo folder/Demofile';
import City from './container/City'; //Class base Component
import CityFunc from './container/CityFunc'; //Function base Component
import CountryFunc from './container/CountryFunc';
import Places from './container/Places';

function App() {
  return (
    <div className="App">
      {/* <CityFunc/> */}
      {/* <City/> */}
      <CountryFunc/>
      {/* <Places/> */}
    </div>
  );
}

export default App;
