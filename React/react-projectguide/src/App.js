import React, { useState, useEffect } from 'react'
import './App.css';

import {getWeatherData} from './Components/WeatherInfo/WeatherInfo';
import WeatherCard from './Components/WeatherCard/WeatherCard'
import WeatherDetail from './Components/WeatherDetail/WeatherDetail';





const App = () => {
  const [toggleState, setToggleState] = useState("off");
  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }
  return (
    <div className="App">
      <div className="Weather_card">
        {/* <WeatherCard city="Dubai" click={toggle} /> */}
        <WeatherCard city="Amsterdam" click={toggle} />
        {toggleState === "off" ? null : <WeatherDetail />}
      </div>
    </div>
  );
};
export default App;

//  <div className="search-form">
// <input type="text" onChange={(e) => setCity(e.target.value)} />
// <button type="button" onClick={() => getData()}>Search</button>
// </div> 