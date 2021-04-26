import React, { useState, useEffect } from "react";
import { getWeatherData } from "../WeatherInfo/WeatherInfo";
import WeatherDetail from '../WeatherDetail/WeatherDetail';
import "./WeatherCard.css";
import Clock from 'react-live-clock';

import ClockDetail from './Clock';

// import { zone } from '../WeatherDetail/WeatherDetail'
// console.log({zone});


// WEATHER CONDITION iMAGE BELOW
import sun from '../WeatherCard/Images/sun.jpg';
import clearSky from '../WeatherCard/Images/skyblue.jpg';
import fewClouds from '../WeatherCard/Images/fewClouds.jpg';
import scatClouds from '../WeatherCard/Images/scatCloud.jpg';
import brokenClouds from '../WeatherCard/Images/brokenClouds.jpg';
import showerRain from '../WeatherCard/Images/showerRain.jpg';
import rain from '../WeatherCard/Images/rain.jpg';
import thunderStorm from '../WeatherCard/Images/thunderStorm.jpg';
import snow from '../WeatherCard/Images/snow.jpg';
import mist from '../WeatherCard/Images/mist.jpg';
// ---------------------------------------------------------------
// MAIN FUNCTION WEATHERCARD BELOW--------------------------------
const WeatherCard = ({ city }) => {
  const [toggleState, setToggleState] = useState("off");
  const [weatherdata, setWeatherData] = useState(null);

  const [sunRise, setSunRise] = useState({})
  const [sunSet, setSunSet] = useState({})
  const [dateTime, setDateTime] = useState({})
  // FUNCTION TOGGLE BELOW FOR TOGGLIN WEATHERDETAIL COMPONENT----------------------------------
  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }
  // FUNCTION GETDATA BELOW FOR FETCHING DATA API CALL & KEY------------------------------------

  useEffect(() => {

    const getData = async () => {
      try {
        const data = await getWeatherData(city);
        setWeatherData(data);
        setSunRise(data.sys.sunrise)
        setSunSet(data.sys.sunset)
        setDateTime(data.dt)
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };




    getData();
  }, [city]);
  // ------------------------------------------------------------------------------------------
  // WEATHERCARD FUNCTION BELOW 
  const Card_wrapper = ({ weatherdata }) => {

    let sunshine = new Date(sunRise * 1000).toLocaleTimeString();
    let sundown = new Date(sunSet * 1000).toLocaleTimeString();
    let currentTime = new Date().toLocaleTimeString();
    // let currentTime = <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Dubai'} />;
    // let test1 = weatherdata.dt.toLocaleTimeString();
    let test1 = new Date(dateTime * 1000).toTimeString();

    return (
      <div className="card_wrapper">

        {weatherdata !== null ? (
          <div className="card" onClick={toggle}>
            <div className="cardHeader">
              <h1>{weatherdata.name}|<span>{weatherdata.sys.country}</span></h1>
              <p>{weatherdata.weather[0].main}<span id="spanId">Today</span></p>
            </div>
            <div className="icontemp">
              <img src={`http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png`}></img>
              <p id="icontemp">{weatherdata.main.temp}&deg;</p>
            </div>
            {weatherdata.main.temp > 25 ? (<img src={sun} alt="sun" id="weather-img" />) :
              weatherdata.weather[0].description.includes("clear sky") ? (<img src={clearSky} alt="helder" id="weather-img" />) :
                weatherdata.weather[0].description.includes("few clouds") ? (<img src={fewClouds} alt="few clouds" id="weather-img" />) :
                  weatherdata.weather[0].description.includes("scattered clouds") ? (<img src={scatClouds} alt="scattered clouds" id="weather-img" />) :
                    weatherdata.weather[0].description.includes("overcast clouds") ? (<img src={brokenClouds} alt="scattered clouds" id="weather-img" />) :
                      weatherdata.weather[0].description.includes("broken clouds") ? (<img src={brokenClouds} alt="broken clouds" id="weather-img" />) :
                        weatherdata.weather[0].description.includes("shower rain") ? (<img src={showerRain} alt="shower rain" id="weather-img" />) :
                          weatherdata.weather[0].description.includes("rain") ? (<img src={rain} alt="rain" id="weather-img" />) :
                            weatherdata.weather[0].description.includes("thunderstorm") ? (<img src={thunderStorm} alt="thunderstorm" id="weather-img" />) :
                              weatherdata.weather[0].description.includes("snow") ? (<img src={snow} alt="snow" id="weather-img" />) :
                                weatherdata.weather[0].description.includes("mist") ? (<img src={mist} alt="mist" id="weather-img" />) :
                                  ("")}
            <div className="main-container">
              <div className="designbar"></div>
              <div className="temp-range">
                <div className="clock">
                  <ClockDetail lat={weatherdata.coord.lat} lon={weatherdata.coord.lon} />
                </div>
                <h5>This {currentTime > "22:00:00" || currentTime < sunshine ? <p>Night</p> :
                  currentTime > sunshine && currentTime < "12:00:00" ? <p>Morning</p> :
                    currentTime > "12:00:00" && currentTime < sundown ? <p>Afternoon</p> :
                      currentTime > sundown && currentTime < "21:59:59" ? <p>Evening</p> :
                        ("StandBy")}weather forecast
                </h5>
                <div className="weatherInfo">
                  <div className="maxTemp">
                    <p><strong>MIN. </strong>TEMP</p>
                    <p><strong>MAX.</strong>TEMP</p>
                    <p><strong>HUMADITY:</strong></p>
                  </div>
                  <div className="procent">
                    <p>{weatherdata.main.temp_min}&deg;</p>
                    <p>{weatherdata.main.temp_max}&deg;</p>
                    <p>{weatherdata.main.humidity}%</p>
                  </div>
                </div>

                {/* <h6>{sunshine}/{sundown}/{currentTime}</h6> */}

                {/* <p>{test1}</p> */}
                {/* <ClockDetail lat={weatherdata.coord.lat} lon={weatherdata.coord.lon} /> */}
                {/* <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Dubai'} /> */}
              </div>
            </div>


          </div>
        ) : null}
      </div>
    );
  };

  // RETURN WEATHERCARD FUNCTION & CARD_WRAPPER & WEATHERDETAIL COMPONENT BELOW
  return (

    <div className="overview">
      <Card_wrapper weatherdata={weatherdata} />
      <div>
        {toggleState === "off" ? null :
          <WeatherDetail
            lat={weatherdata.coord.lat}
            lon={weatherdata.coord.lon}
            name={weatherdata.name} />}
      </div>
    </div>
  );
};
export default WeatherCard;


// 
