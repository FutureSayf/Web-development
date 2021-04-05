// import React, { useState, useEffect } from 'react'
import './App.css';
import WeatherCard from './Components/WeatherCard/WeatherCard'


const App = () => {
  
  return (
    <div className="App">
      <div className="introtext">Dynamic React weatherApp</div>
        
        <div className="cards">
        <WeatherCard city="Miami" />
        <WeatherCard city="Dubai" />
        </div>
        
    </div>
  );
};
export default App;
