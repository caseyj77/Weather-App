import WeatherData from './weatherData';

class DOMUpdater extends WeatherData {
    constructor() {
        super();
        // Current temperature elements
        this.displayCurrentLocation = document.getElementById('display-location')
        this.currentTemp = document.getElementById('current-temp');
        this.currentTempValue = document.getElementById('current-temp-value');
        this.currentIcon = document.getElementById('current-icon');
        this.currentLocation = document.getElementById('current-location');

        // Today's weather elements
        this.time8amValue = document.getElementById('time-8am-value');
        this.time8amIcon = document.getElementById('time-8am-icon');
        this.time3pmValue = document.getElementById('time-3pm-value');
        this.time3pmIcon = document.getElementById('time-3pm-icon');
        this.time8pmValue = document.getElementById('time-8pm-value');
        this.time8pmIcon = document.getElementById('time-8pm-icon');

        // Three-day forecast elements
        this.dayofweek1 = document.getElementById('day-of-week1');
        this.dayofweek2 = document.getElementById('day-of-week2');
        this.dayofweek3 = document.getElementById('day-of-week3');
        this.day1High = document.getElementById('day-1-high');
        this.day1Low = document.getElementById('day-1-low');
        this.day1Icon = document.getElementById('day-1-icon');
        this.day2High = document.getElementById('day-2-high');
        this.day2Low = document.getElementById('day-2-low');
        this.day2Icon = document.getElementById('day-2-icon');
        this.day3High = document.getElementById('day-3-high');
        this.day3Low = document.getElementById('day-3-low');
        this.day3Icon = document.getElementById('day-3-icon');
    }

    updateData(weatherData) {
        console.log('Weather Data:', weatherData); // Debugging: Log weather data

        // Ensure the icon URL has the correct protocol
        const cticonUrl = weatherData.current.condition.icon.startsWith('//') ? `https:${weatherData.current.condition.icon}` : weatherData.current.condition.icon;

        // Update current location
        const displayLocation = `${weatherData.location.name}, ${weatherData.location.region}`;
        if (this.displayCurrentLocation) {
            this.displayCurrentLocation.textContent = displayLocation;
        } else {
            console.log('Current location element not found');
        }

        // Update current temperature and icon
        if (this.currentTemp) {
            this.currentTempValue.textContent = `${weatherData.current.temp_f}°F`;
            this.currentIcon.style.backgroundImage = `url(${cticonUrl})`;
        } else {
            console.log('Current temp element not found'); // Debugging: Check if element exists
        }

        // Update today's weather
        const updateTimeWeather = (timeValueElem, timeIconElem, tempData, iconData, timeLabel) => {
            if (timeValueElem) {
                timeValueElem.textContent = `${timeLabel} ${tempData}°F`;
                timeIconElem.style.backgroundImage = `url(${iconData})`;
            }
        };

        updateTimeWeather(this.time8amValue, this.time8amIcon, weatherData.forecast.forecastday[0].hour[8].temp_f, weatherData.forecast.forecastday[0].hour[8].condition.icon, '8am:');
        updateTimeWeather(this.time3pmValue, this.time3pmIcon, weatherData.forecast.forecastday[0].hour[15].temp_f, weatherData.forecast.forecastday[0].hour[15].condition.icon, '3pm:');
        updateTimeWeather(this.time8pmValue, this.time8pmIcon, weatherData.forecast.forecastday[0].hour[20].temp_f, weatherData.forecast.forecastday[0].hour[20].condition.icon, '8pm:');

        // Update day of the week
        const updateDayOfWeek = (dayOfWeekElem, dateStr) => {
            if (dayOfWeekElem) {
                const date = new Date(dateStr);
                const dayOfWeek = date.toLocaleString('default', { weekday: 'long' });
                dayOfWeekElem.textContent = dayOfWeek;
            } else {
                console.log('Day of week element not found');
            }
        };

        updateDayOfWeek(this.dayofweek1, weatherData.forecast.forecastday[1].date); // Tomorrow
        updateDayOfWeek(this.dayofweek2, weatherData.forecast.forecastday[2].date); // Day after tomorrow
        updateDayOfWeek(this.dayofweek3, weatherData.forecast.forecastday[3].date); // Two days after tomorrow

        // Update three-day forecast
        if (this.day1High) {
            this.day1High.textContent = `High: ${weatherData.forecast.forecastday[1].day.maxtemp_f}°F`;
        }
        if (this.day1Low) {
            this.day1Low.textContent = `Low: ${weatherData.forecast.forecastday[1].day.mintemp_f}°F`;
        }
        if (this.day1Icon) {
            this.day1Icon.style.backgroundImage = `url(${weatherData.forecast.forecastday[1].day.condition.icon})`;
        }

        if (this.day2High) {
            this.day2High.textContent = `High: ${weatherData.forecast.forecastday[2].day.maxtemp_f}°F`;
        }
        if (this.day2Low) {
            this.day2Low.textContent = `Low: ${weatherData.forecast.forecastday[2].day.mintemp_f}°F`;
        }
        if (this.day2Icon) {
            this.day2Icon.style.backgroundImage = `url(${weatherData.forecast.forecastday[2].day.condition.icon})`;
        }

        if (this.day3High) {
            this.day3High.textContent = `High: ${weatherData.forecast.forecastday[3].day.maxtemp_f}°F`;
        }
        if (this.day3Low) {
            this.day3Low.textContent = `Low: ${weatherData.forecast.forecastday[3].day.mintemp_f}°F`;
        }
        if (this.day3Icon) {
            this.day3Icon.style.backgroundImage = `url(${weatherData.forecast.forecastday[3].day.condition.icon})`;
        }
    }
}

export { DOMUpdater };
