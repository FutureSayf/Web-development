import React, { useState, useEffect } from 'react'
import {getWeatherData} from '../WeatherInfo/WeatherDetail_Info';
import './WeatherDetail.css'
// FUNCTION WEATHERDETAIL-------------------------------------------------------------------------------------------------------
const WeatherDetail = ({ lat, lon, name }) => {
    const [weatherdata, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const getData = async () => {
      try {
        const data = await getWeatherData(lat, lon);
        setWeatherData(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    useEffect(() => {
      getData();
    }, []);
// NEW SUB-FUNCTION FOR ACCORDION BELOW ///----------------------------------------------------------------------------------------
    const [active, setActive] = useState("");
    
    const Accordion = ({ title, active, setActive }) => {

      let d = new Date(title.dt * 1000).toLocaleDateString();
      let min = Math.floor(title.temp.min);
      let max = Math.floor(title.temp.max);
      let morning = Math.floor(title.temp.morn);
      let afternoon = Math.floor(title.temp.day);
      let evening = Math.floor(title.temp.eve);
      let night = Math.floor(title.temp.night);
      let icon = (<img className="detail_icon" src={`http://openweathermap.org/img/wn/${title.weather[0].icon}@2x.png`}></img>);
      // console.log(d);
      // console.log(weatherdata);
      return (
        <div className="accordion">
          <div className="accordionHeading">
            <div className="container">
              {d} {icon} {min}/{max}&deg;C
              <span onClick={() => setActive(title)}>
                {active === title ? "X" : "="}
              </span>
            </div>
          </div>
          <div className={(active === title ? "show" : "") + " accordionContent"}>
            <div className="container">
              <table className="table">
                <thead>
                  <tr>
                    <th colSpan="2"></th>
                    <th>Morning</th>
                    <th>Afternoon</th>
                    <th>Evening</th>
                    <th>Night</th>
                  </tr>
                </thead>
                <tbody className="tbody">
                  <tr>
                    <td colSpan="2">Temperature</td>
                    <td>{morning}&deg;C</td>
                    <td>{afternoon}&deg;C</td>
                    <td>{evening}&deg;C</td>
                    <td>{night}&deg;C</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    };
// ------------------------------------------------------------------------------------------------------------------------------
    return (
      <div className="weatherDetails">
        {weatherdata !== null ? (
          <div>
            <h3>{name}</h3>
            {weatherdata.daily.map((datum) => (
              <div>
                <Accordion title={datum} active={active} setActive={setActive}  />
              </div>
            ))}
          </div>
        ) : null}
        <div>Hello{}</div>
      </div>
    );
  };
  export default WeatherDetail;
 // const weatherIcon = "http://openweathermap.org/img/w/";