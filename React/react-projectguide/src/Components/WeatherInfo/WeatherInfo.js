import axios from 'axios';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?';
const apiKey = '17e4c2d50b76ef36977b9fd2b43d11d7';



export const getWeatherData = async (cityname) => {
    try{
        const {data} = await axios.get(baseUrl + `q=${cityname}&appid=${apiKey}`);
        return data;
    }catch(error){
        throw error;
    }
}


// https://stackoverflow.com/questions/44177417/how-to-display-openweathermap-weather-icon
// https://openweathermap.org/weather-conditions
