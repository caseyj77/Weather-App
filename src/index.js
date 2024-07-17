import _ from 'lodash';
import './style.css';
import WeatherData from './weatherData';
import { DOMUpdater } from './updateDOM';

document.addEventListener('DOMContentLoaded', () => {
    const weather = new WeatherData();
    weather.getCurrentLocation()
        .then((location) => {
            return weather.fetchWeatherData();
        })
        .then((data) => {
            const domUpdater = new DOMUpdater();
            domUpdater.updateData(data); // Ensure data is passed correctly
        })
        .catch((error) => {
            console.error('Error getting current location or fetching weather data:', error);
        });
});
