// import React from 'react';

import React, { useState, useEffect } from 'react'

import {getWeatherData} from '../WeatherInfo/WeatherInfo';

import './WeatherCard.css'



const WeatherCard = ({city}) => {
    const [weatherdata, setWeatherData] = useState(null);
//   const [city, setCity] = useState('istanbul');
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

        <div className="card">
          <h2 className="title">weather card</h2>         
        
        {weatherdata !== null ? (
          <div className="main-container">
            <h2 className="title">{weatherdata.name} | {weatherdata.sys.country}</h2>
              <h4>{weatherdata.name}</h4>
              <img src={`http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`}></img>
              <h3>{weatherdata.weather[0].main}</h3>
            <div className="temp">
              <h4>{weatherdata.main.temp}</h4>
            </div>
            <div className="location">
              <h3>{weatherdata.name} | {weatherdata.sys.country}</h3>
            </div>
            <div className="temp-range">
              <h6>min: {weatherdata.main.temp_min}&deg;C || 
              Max: {weatherdata.main.temp_max}&deg;C || 
              Humidity: {weatherdata.main.humidity}%</h6>
            </div>
          </div>
        ): null}

        
      </div>
    )
}

export default WeatherCard;



