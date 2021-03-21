import React, { useState, useEffect } from "react";
import { getWeatherData } from "../WeatherInfo/WeatherInfo";
import WeatherDetail from '../WeatherDetail/WeatherDetail';
import "./WeatherCard.css";


// WEATHER CONDITION iMAGE BELOW
import sun from '../WeatherCard/images/sun.jpg';
import clear from '../WeatherCard/images/Clear.jpg';
import fewClouds from '../WeatherCard/images/scatCloud.jpg';
import scatClouds from '../WeatherCard/images/scatCloud.jpg';
import brokenClouds from '../WeatherCard/images/brokenClouds.jpg';
import showerRain from '../WeatherCard/images/showerRain.jpg';
import rain from '../WeatherCard/images/rain.jpg';
import thunderStorm from '../WeatherCard/images/thunderStorm.jpg';
import snow from '../WeatherCard/images/snow.jpg';
import mist from '../WeatherCard/images/mist.jpg';




const WeatherCard = ({ city }) => {

  const [toggleState, setToggleState] = useState("off");
  const [weatherdata, setWeatherData] = useState(null);
  // const [loading, setLoading] = useState(false);
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
  return (

    <div className="overview">
    
      <div className="card_wrapper">
          {weatherdata !== null ? (
            <div className="card" onClick={toggle}>
               {weatherdata.main.temp > 25 ? (<img src={sun} alt="sun" id="weather-img"/>) :
               weatherdata.weather[0].description.includes("clear sky") ? (<img src={clear} alt="helder" id="weather-img"/>) : 
               weatherdata.weather[0].description.includes("few clouds") ? (<img src={fewClouds} alt="few clouds" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("scattered clouds") ? (<img src={scatClouds} alt="scattered clouds" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("broken clouds") ? (<img src={brokenClouds} alt="broken clouds" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("shower rain") ? (<img src={showerRain} alt="shower rain" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("rain") ? (<img src={rain} alt="rain" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("thunderstorm") ? (<img src={thunderStorm} alt="thunderstorm" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("snow") ? (<img src={snow} alt="snow" id="weather-img"/>) :  
               weatherdata.weather[0].description.includes("mist") ? (<img src={mist} alt="mist" id="weather-img"/>) :  
               ("")}

              <h2 className="title">weather card</h2>
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
            </div>
          ) : null}
      </div>

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

// onClick{click} veranderd naar toggle   '52.3676'  '4.9041'

{/* <div className="card_wrapper">
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
              {/* <h3>{weatherdata.weather[0].main.includes('rain')}</h3> */}
    //           <div className="temp">
    //             <h4>{weatherdata.main.temp}&deg;C</h4>
    //           </div>
    //           <div className="location">
    //             <h3>
    //               {weatherdata.name} | {weatherdata.sys.country} | {weatherdata.coord.lat}
    //             </h3>
    //           </div>
    //           <div className="temp-range">
    //             <h6>
    //               min: {weatherdata.main.temp_min}&deg;C || Max:{" "}
    //               {weatherdata.main.temp_max}&deg;C || Humidity:{" "}
    //               {weatherdata.main.humidity}%
    //             </h6>
    //           </div>
    //         </div>

    //       ) : null}
    //     </div>
    //     {toggleState === "off" ? null : 
    //     <WeatherDetail 
    //       lat={weatherdata.coord.lat} 
    //       lon={weatherdata.coord.lon} 
    //       name={weatherdata.name}/>}
    // </div> */}



