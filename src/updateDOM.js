import WeatherData from "./weatherData";

class DOMUpdater extends WeatherData {
    constructor() {
        super();
        this.currentTemp = document.getElementById('current-temp-value');
        this.weather8am = document.getElementById('weather-today-8am');
        this.weather3pm = document.getElementById('weather-today-3pm');
        this.weather8pm = document.getElementById('weather-today-8pm');
        this.weatherDay1 = document.getElementById('weather-day-1');
        this.weatherDay2 = document.getElementById('weather-day-2');
        this.weatherDay3 = document.getElementById('weather-day-3');
    }

    updateData(weatherData) {
        if (this.currentTemp) {
            this.currentTemp.textContent = `${weatherData.current.temp_f}°F`;
        }

        if (this.weather8am) {
            this.weather8am.textContent = `8am: ${weatherData.forecast.forecastday[0].hour[8].temp_f}°F`;
        }

        if (this.weather3pm) {
            this.weather3pm.textContent = `3pm: ${weatherData.forecast.forecastday[0].hour[15].temp_f}°F`;
        }

        if (this.weather8pm) {
            this.weather8pm.textContent = `8pm: ${weatherData.forecast.forecastday[0].hour[20].temp_f}°F`;
        }

        if (this.weatherDay1) {
            this.weatherDay1.textContent = `First Day: ${weatherData.forecast.forecastday[1].day.maxtemp_f}°F`;
        }

        if (this.weatherDay2) {
            this.weatherDay2.textContent = `Second Day: ${weatherData.forecast.forecastday[2].day.maxtemp_f}°F`;
        }

        if (this.weatherDay3) {
            this.weatherDay3.textContent = `Third Day: ${weatherData.forecast.forecastday[3].day.maxtemp_f}°F`;
        }
    }
}

export { DOMUpdater };
