import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall?';
const apiKey = '17e4c2d50b76ef36977b9fd2b43d11d7';
const units = '&units=metric';
// const lat = '52.3676';
// const lon = '4.9041';
const part = '';

export const getWeatherData = async (lat, lon) => {
    try{
        const {data} = await axios.get(baseUrl + `lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}${units}`);
        return data;
    }catch(error){
        throw error;
    }
}



//  https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


// https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={API key}


// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


// const {data} = await axios.get(baseUrl + `lat=${lat}&lon=${lon}&exclude=${part}&appid=${apiKey}${units}`);