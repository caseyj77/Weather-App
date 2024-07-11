import axios from 'axios';

class WeatherData {
    constructor() {
        this.weatherData = {};
    }

    fetchWeatherData() {
        axios.get('https://api.weatherapi.com/v1/forecast.json?key=f4166c3d8a2e4747a50173115240907&q=32566&days=4')
        .then((response) => {
            // handle success
            console.log(response.data);
            Object.assign(this.weatherData, response.data);
            console.log(this.weatherData); // Display the fetched data in the console
        })
        .catch((error) => {
            // handle error
            console.error('Error fetching data:', error);
        });
    }
}

export default WeatherData;