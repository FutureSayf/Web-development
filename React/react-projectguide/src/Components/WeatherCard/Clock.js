import React, { useState, useEffect } from 'react'
import { getWeatherData } from '../WeatherInfo/WeatherDetail_Info';
import Clock from 'react-live-clock';

const ClockDetail = ( {lat, lon}) => {
    const style = {
      color: 'red',
      fontSize: '50px'
    }
    const [weatherdata, setWeatherData] = useState(null);
    
    
    
    useEffect(() => {
      let isMounted = true
      const getData = async () => {
        try {
          const data = await getWeatherData(lat, lon);
          setWeatherData(data.timezone);
          // console.log(data);
        } catch (error) {
          console.log(error.message);
        }
      };


      getData();
    }, [lat, lon]);
    
    return (
        <div>
            <Clock style={style} format={'HH:mm:ss'} ticking={true} timezone={weatherdata} />
        </div>
    );
}

export default ClockDetail;

// timezone={weatherdata.timezone}

// useEffect(() => {
//   let isMounted = true
//   const getData = async () => {
//     try {
//       const data = await getWeatherData(lat, lon);
//       setWeatherData(data.timezone);
//       console.log(data);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
//   getData();
// }, [lat, lon]);