import React, { useState, useEffect } from 'react'
import {getWeatherData} from '../WeatherInfo/WeatherDetail_Info';
import './WeatherDetail.css'
// FUNCTION WEATHERDETAIL-------------------------------------------------------------------------------------------------------
const WeatherDetail = ({city}) => {
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
    useEffect(() => {
        getData();
    }, []);

    // const dt = new Date(weatherdata.daily[0].dt*1000);
    // let DateTime = dt.toLocaleDateString();

    // console.log(DateTime);

    // NEW SUB-FUNCTION FOR ACCORDION BELOW ///----------------------------------------------------------------------------------------
    const [active, setActive] = useState("");
    const Accordion = ({ title, active, setActive }) => {
        return(
            <div className="accordion">
                <div className="accordionHeading">
                    <div className="container">
                        <p>{title}{weatherdata.timezone}</p>
                        <span onClick={() => setActive(title)}>
                            {active === title ? "X" : "|||"}
                        </span>
                    </div>
                </div>
                <div className={(active === title ? "show" : "" ) + " accordionContent"}>
                    <div className="container">
                        <p>LOrem dghsdkjghsdkgdsk sdghkdjsghkjsdh</p>
                    </div>
                </div>
            </div>
        );
    }
    // ------------------------------------------------------------------------------------------------------------------------------
   

    
    return (
       <div className="weatherDetails">
           
           {weatherdata !== null ? (
           
           <div>
           
           <h3>WeatherDetails/accordion{weatherdata.timezone}</h3>

           <Accordion title={weatherdata.daily[0].dt} active={active} setActive={setActive} />
           <Accordion title="Title2" active={active} setActive={setActive} />
           <Accordion title="Title3" active={active} setActive={setActive} />
           
           </div>

           ): null}
           {/* <Accordion title="Title1" active={active} setActive={setActive} />
           <Accordion title="Title2" active={active} setActive={setActive} />
           <Accordion title="Title3" active={active} setActive={setActive} /> */}
           <div>Hello</div>
       </div>
    )
}
export default WeatherDetail;
 // const weatherIcon = "http://openweathermap.org/img/w/";