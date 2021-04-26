// import React, { useState, useEffect } from 'react'
import './App.css';
import WeatherCard from './Components/WeatherCard/WeatherCard'


const App = () => {

  return (
    <div className="App">
      <div className="introtext"><p>Dynamic</p> <p>React</p> <p>weatherApp</p></div>

      {/* <div className="cards"> */}
      <WeatherCard city="Amsterdam" />
      <WeatherCard city="Dubai" />
      {/* </div> */}

    </div>
  );
};
export default App;
