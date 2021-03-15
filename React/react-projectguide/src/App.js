import React, { useState, useEffect } from 'react'
import './App.css';

import {getWeatherData} from './Components/WeatherInfo/WeatherInfo';
import WeatherCard from './Components/WeatherCard/WeatherCard'
import WeatherDetail from './Components/WeatherDetail/WeatherDetail';





 const App = () => {
 
  return (
    <div className="App">

      <WeatherCard city="Istanbul"/>
      <WeatherCard city="Amsterdam"/>
      <WeatherDetail  />

    </div>
   
  );
}
export default App;

//  <div className="search-form">
// <input type="text" onChange={(e) => setCity(e.target.value)} />
// <button type="button" onClick={() => getData()}>Search</button>
// </div> 