import WeatherData from "./weatherData";


class DOMUpdater extends WeatherData{
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





    updateData() {
        if (this.currentTemp) {
            const currentTemp = this.weatherData.current.temp_c;
            this.currentTemp.textContent = `${currentTemp}°C`;
        }
    }

}

export { DOMUpdater};