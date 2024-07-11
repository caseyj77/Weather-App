import _ from 'lodash';
import './style.css';
import WeatherData from './weatherData.js';


document.addEventListener('DOMContentLoaded', () => {
    const weather = new WeatherData();
    weather.fetchWeatherData();
});


// https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/london?key=f4166c3d8a2e4747a50173115240907



// https://api.weatherapi.com/v1/current.json