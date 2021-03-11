import React, { useState, useEffect } from 'react'
import './App.css';

import {getWeatherData} from './Components/WeatherInfo/WeatherInfo';

import WeatherCard from './Components/WeatherCard/WeatherCard'




 const App = () => {
   
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState('istanbul');
  const [loading, setLoading] = useState(false);
  
  const getData = async () => {
    try{
      const data = await getWeatherData(city);
      setWeatherData(data);
      console.log(data);
    }catch(error){
      console.log(error.message);
    }
  }
  // const weatherIcon = "http://openweathermap.org/img/w/";

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <div className="card">
        <h2 className="title">{weatherdata.name} | {weatherdata.sys.country}</h2>
        {/* <div className="search-form">
          <input type="text" onChange={(e) => setCity(e.target.value)} />
          <button type="button" onClick={() => getData()}>Search</button>
        </div> */}
        {weatherdata !== null ? (
          <div className="main-container">
            <h4>Live Weather condi</h4>
            <h3>{weatherdata.weather[0].main}</h3>
          <div className="temp">
            <h4>{weatherdata.main.temp}</h4>
          </div>
          <div className="location">
            <h3>Zoetermeer | Nederland</h3>
          </div>
          <div className="temp-range">
            <h6>min: 25&deg;C || Max: 28&deg;C || Humidity: 10%</h6>
          </div>
      </div>
        ): null}
        
      </div>
    </div>
   
  );
}
export default App;
