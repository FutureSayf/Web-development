// import React, { useState, useEffect } from 'react'
import './App.css';
import WeatherCard from './Components/WeatherCard/WeatherCard'


const App = () => {
  
  return (
    <div className="App">
      <div>hello</div>
        <WeatherCard city="Amsterdam" />
        <WeatherCard city="moscow" />
    </div>
  );
};
export default App;
