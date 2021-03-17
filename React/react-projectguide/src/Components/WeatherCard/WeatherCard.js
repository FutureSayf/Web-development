// import React from 'react';

import React, { useState, useEffect } from "react";

import { getWeatherData } from "../WeatherInfo/WeatherInfo";
import WeatherDetail from '../WeatherDetail/WeatherDetail';

import "./WeatherCard.css";

const WeatherCard = ({ city }) => {

  const [toggleState, setToggleState] = useState("off");
  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }

  const [weatherdata, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    try {
      const data = await getWeatherData(city);
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    
    <div>
        <div className="card" onClick={toggle}>
          <h2 className="title">weather card</h2>
          
          {weatherdata !== null ? (

            <div className="main-container">
              <h2 className="title">
                {weatherdata.name} | {weatherdata.sys.country}
              </h2>
              <h4>{weatherdata.name}</h4>
                <img src={`http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`}></img>
              <h3>{weatherdata.weather[0].main}</h3>
              <div className="temp">
                <h4>{weatherdata.main.temp}&deg;C</h4>
              </div>
              <div className="location">
                <h3>
                  {weatherdata.name} | {weatherdata.sys.country} | {weatherdata.coord.lat}
                </h3>
              </div>
              <div className="temp-range">
                <h6>
                  min: {weatherdata.main.temp_min}&deg;C || Max:{" "}
                  {weatherdata.main.temp_max}&deg;C || Humidity:{" "}
                  {weatherdata.main.humidity}%
                </h6>
              </div>
            </div>

          ) : null}
        </div>
        {/* <WeatherDetail /> */}
        {toggleState === "off" ? null : <WeatherDetail lat={weatherdata.coord.lat} lon={weatherdata.coord.lon} />}
    </div>

  );
};
export default WeatherCard;

// onClick{click} veranderd naar toggle   '52.3676'  '4.9041'



