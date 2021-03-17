import React, { useState, useEffect } from 'react'
import './App.css';

import {getWeatherData} from './Components/WeatherInfo/WeatherInfo';
import WeatherCard from './Components/WeatherCard/WeatherCard'
import WeatherDetail from './Components/WeatherDetail/WeatherDetail';





const App = () => {
  
  return (
    <div className="App">
      <div className="Weather_card">
        <WeatherCard city="Dubai" />
        <WeatherCard city="Istanbul" />
      </div>
    </div>
  );
};
export default App;
