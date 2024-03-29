import React, { useState, useEffect } from "react";
import { getWeatherData } from "../WeatherInfo/WeatherInfo";
import WeatherDetail from '../WeatherDetail/WeatherDetail';
import "./WeatherCard.css";


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
// FUNCTION TOGGLE BELOW FOR TOGGLIN WEATHERDETAIL COMPONENT----------------------------------
  function toggle() {
    setToggleState(toggleState === "off" ? "on" : "off");
  }
// FUNCTION GETDATA BELOW FOR FETCHING DATA API CALL & KEY------------------------------------
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
  // ------------------------------------------------------------------------------------------
  // RETURN WEATHERCARD FUNCTION & WEATHERDETAIL COMPONENT BELOW 
  
  const Card_wrapper = ({ iets, ietss }) =>{
    // let x = new Date(weatherdata.sys.sunrise* 1000);

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
               {weatherdata.main.temp > 25 ? (<img src={sun} alt="sun" id="weather-img"/>) :
               weatherdata.weather[0].description.includes("clear sky") ? (<img src={clearSky} alt="helder" id="weather-img"/>) : 
               weatherdata.weather[0].description.includes("few clouds") ? (<img src={fewClouds} alt="few clouds" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("scattered clouds") ? (<img src={scatClouds} alt="scattered clouds" id="weather-img"/>) :
               weatherdata.weather[0].description.includes("overcast clouds") ? (<img src={brokenClouds} alt="scattered clouds" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("broken clouds") ? (<img src={brokenClouds} alt="broken clouds" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("shower rain") ? (<img src={showerRain} alt="shower rain" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("rain") ? (<img src={rain} alt="rain" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("thunderstorm") ? (<img src={thunderStorm} alt="thunderstorm" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("snow") ? (<img src={snow} alt="snow" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("mist") ? (<img src={mist} alt="mist" id="weather-img"/>) :  
               ("")}
              <div className="main-container">
                <div className="designbar"></div>        
                <div className="temp-range">
                  <h5>This {weatherdata.sys.sunrise} weather forecast</h5>
                  <h6>
                    min: {weatherdata.main.temp_min}&deg;C || Max:{" "}
                    {weatherdata.main.temp_max}&deg;C || Humidity:{" "}
                    {weatherdata.main.humidity}%
                  </h6>
                  <p>min:{weatherdata.main.temp_min}&deg;</p>
                  <p>max:{weatherdata.main.temp_max}&deg;</p>
                  <p>Humidity:{weatherdata.main.humidity}%</p>
                  {/* {x} */}

                </div>
              </div>
            </div>
          ) : null}
      </div>




    );


  };





  return (

    <div className="overview">
    
      {/* <div className="card_wrapper">

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
               {weatherdata.main.temp > 25 ? (<img src={sun} alt="sun" id="weather-img"/>) :
               weatherdata.weather[0].description.includes("clear sky") ? (<img src={clearSky} alt="helder" id="weather-img"/>) : 
               weatherdata.weather[0].description.includes("few clouds") ? (<img src={fewClouds} alt="few clouds" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("scattered clouds") ? (<img src={scatClouds} alt="scattered clouds" id="weather-img"/>) :
               weatherdata.weather[0].description.includes("overcast clouds") ? (<img src={brokenClouds} alt="scattered clouds" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("broken clouds") ? (<img src={brokenClouds} alt="broken clouds" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("shower rain") ? (<img src={showerRain} alt="shower rain" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("rain") ? (<img src={rain} alt="rain" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("thunderstorm") ? (<img src={thunderStorm} alt="thunderstorm" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("snow") ? (<img src={snow} alt="snow" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("mist") ? (<img src={mist} alt="mist" id="weather-img"/>) :  
               ("")}
              <div className="main-container">
                <div className="designbar"></div>        
                <div className="temp-range">
                  <h5>This {weatherdata.sys.sunrise} weather forecast</h5>
                  <h6>
                    min: {weatherdata.main.temp_min}&deg;C || Max:{" "}
                    {weatherdata.main.temp_max}&deg;C || Humidity:{" "}
                    {weatherdata.main.humidity}%
                  </h6>
                  <p>min:{weatherdata.main.temp_min}&deg;</p>
                  <p>max:{weatherdata.main.temp_max}&deg;</p>
                  <p>Humidity:{weatherdata.main.humidity}%</p>

                </div>
              </div>
            </div>
          ) : null}
      </div> */}


      {/* {weatherdata !== null ? (
      <div>
        {weatherdata.map((iets) =>(
          <div><Card_wrapper title={iets}/></div>
        ))}
      </div>
      ) : null} */}




        <Card_wrapper />
      <div>
        {toggleState === "off" ? null : 
        <WeatherDetail 
        lat={weatherdata.coord.lat} 
        lon={weatherdata.coord.lon} 
        name={weatherdata.name}/>}
      </div>
    </div>
  );
};
export default WeatherCard;