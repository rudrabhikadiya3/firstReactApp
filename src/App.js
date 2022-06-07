import logo from './logo.svg';
import './App.css';
import Demofile from './Demo folder/Demofile';
import City from './container/City'; //Class base Component
import CityFunc from './container/CityFunc'; //Function base Component
import CountryFunc from './container/CountryFunc';
import Places from './container/Places';
import LifeCycle from './container/Timer/LifeCycle';
import LifeCycleFunc from './container/Timer/LifeCycleFunc';

function App() {
  return (
    <div className="App">
      {/* <CityFunc/> */}
      {/* <City/> */}
      {/* <Places/> */}
      {/* <CountryFunc/> */}
      {/* <LifeCycle/> */}
      <LifeCycleFunc/>
    </div>
  );
}

export default App;
