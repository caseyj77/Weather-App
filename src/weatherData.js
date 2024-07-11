import axios from 'axios';

class WeatherData {
    constructor() {
        this.weatherData = {};
        this.currentLocation = '';
        this.userId = 'f4166c3d8a2e4747a50173115240907';
    }

    getCurrentLocation() {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.currentLocation = `${position.coords.latitude.toFixed(4)},${position.coords.longitude.toFixed(4)}`;
                    resolve(this.currentLocation);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    reject(error);
                }
            );
        });
    }

    fetchWeatherData() {
        return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${this.userId}&q=${this.currentLocation}&days=4`)
            .then((response) => {
                Object.assign(this.weatherData, response.data);
                return this.weatherData;
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                throw error;
            });
    }
}




export default WeatherData;
