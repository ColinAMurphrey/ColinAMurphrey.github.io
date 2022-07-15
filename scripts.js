// Openweathermap API
const api = '0332da943c5a2cd29b74fdc5744d2436';

const iconImg = document.getElementById('weather-icon');
const loc = document.querySelector('.location');
// const tempC = document.querySelector('.c');
const tempF = document.querySelector('.f');
const desc = document.querySelector('.desc');
const sunriseDOM = document.querySelector('.sunrise');
const sunsetDOM = document.querySelector('.sunset');

// Hourly table
// Time slots
const time_1 = document.querySelector('#time-1')
const time_2 = document.querySelector('#time-2')
const time_3 = document.querySelector('#time-3')
const time_4 = document.querySelector('#time-4')
const time_5 = document.querySelector('#time-5')
const time_6 = document.querySelector('#time-6')
const time_7 = document.querySelector('#time-7')
const time_8 = document.querySelector('#time-8')
const time_9 = document.querySelector('#time-9')
const time_10 = document.querySelector('#time-10')
const time_11 = document.querySelector('#time-11')
const time_12 = document.querySelector('#time-12')

// Temperature slots
const temp_1 = document.querySelector('#temp-1')
const temp_2 = document.querySelector('#temp-2')
const temp_3 = document.querySelector('#temp-3')
const temp_4 = document.querySelector('#temp-4')
const temp_5 = document.querySelector('#temp-5')
const temp_6 = document.querySelector('#temp-6')
const temp_7 = document.querySelector('#temp-7')
const temp_8 = document.querySelector('#temp-8')
const temp_9 = document.querySelector('#temp-9')
const temp_10 = document.querySelector('#temp-10')
const temp_11 = document.querySelector('#temp-11')
const temp_12 = document.querySelector('#temp-12')

// Rain chance slots
const rain_1 = document.querySelector('#rain-1')
const rain_2 = document.querySelector('#rain-2')
const rain_3 = document.querySelector('#rain-3')
const rain_4 = document.querySelector('#rain-4')
const rain_5 = document.querySelector('#rain-5')
const rain_6 = document.querySelector('#rain-6')
const rain_7 = document.querySelector('#rain-7')
const rain_8 = document.querySelector('#rain-8')
const rain_9 = document.querySelector('#rain-9')
const rain_10 = document.querySelector('#rain-10')
const rain_11 = document.querySelector('#rain-11')
const rain_12 = document.querySelector('#rain-12')

// window.addEventListener('load', () => {



    let long;
    let lat;
    const city = "Houston";
    // Accessing Geolocation of User
    // if (navigator.geolocation) {
    // navigator.geolocation.getCurrentPosition((position) => {
        // Storing Longitude and Latitude in variables
    // long = position.coords.longitude;
    // lat = position.coords.latitude;
    // const base = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=imperial`;
    // const hourly = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${api}&units=imperial`;
    const base = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=imperial`;
    const hourlyUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=29.7604&lon=-95.3698&appid=${api}&units=imperial`;
    
    //Using fetch to get data
    fetch(base)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const { temp } = data.main;
        const place = data.name;
        const { description, icon } = data.weather[0];
        const {sunrise, sunset } = data.sys;

        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        const fahrenheit = (temp * 9) / 5 + 32;

        // Converting Epoch (Unix) time to GMT
        const sunriseGMT = new Date(sunrise * 1000);
        const sunsetGMT = new Date(sunset * 1000);

        // Interacting with DOM to show data
        iconImg.src = iconUrl;
        loc.textContent = `${place}`;
        desc.textContent = `${description}`;
        // tempC.textContent = `${temp.toFixed(2)} °C`;
        tempF.textContent = `${temp.toFixed(2)}°F`;
        sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
        sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;
    });

    fetch(hourlyUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {

        // time
        const time_of_1 = new Date(data.hourly[1].dt * 1000);
        const time_of_2 = new Date(data.hourly[2].dt * 1000);
        const time_of_3 = new Date(data.hourly[3].dt * 1000);
        const time_of_4 = new Date(data.hourly[4].dt * 1000);
        const time_of_5 = new Date(data.hourly[5].dt * 1000);
        const time_of_6 = new Date(data.hourly[6].dt * 1000);
        const time_of_7 = new Date(data.hourly[7].dt * 1000);
        const time_of_8 = new Date(data.hourly[8].dt * 1000);
        const time_of_9 = new Date(data.hourly[9].dt * 1000);
        const time_of_10 = new Date(data.hourly[10].dt * 1000);
        const time_of_11 = new Date(data.hourly[11].dt * 1000);
        const time_of_12 = new Date(data.hourly[12].dt * 1000);
        
        // temperature
        const temp_of_1 = data.hourly[1].temp;
        const temp_of_2 = data.hourly[2].temp;
        const temp_of_3 = data.hourly[3].temp;
        const temp_of_4 = data.hourly[4].temp;
        const temp_of_5 = data.hourly[5].temp;
        const temp_of_6 = data.hourly[6].temp;
        const temp_of_7 = data.hourly[7].temp;
        const temp_of_8 = data.hourly[8].temp;
        const temp_of_9 = data.hourly[9].temp;
        const temp_of_10 = data.hourly[10].temp;
        const temp_of_11 = data.hourly[11].temp;
        const temp_of_12 = data.hourly[12].temp;

        // rain
        const rain_of_1 = data.hourly[1].pop;
        const rain_of_2 = data.hourly[2].pop;
        const rain_of_3 = data.hourly[3].pop;
        const rain_of_4 = data.hourly[4].pop;
        const rain_of_5 = data.hourly[5].pop;
        const rain_of_6 = data.hourly[6].pop;
        const rain_of_7 = data.hourly[7].pop;
        const rain_of_8 = data.hourly[8].pop;
        const rain_of_9 = data.hourly[9].pop;
        const rain_of_10 = data.hourly[10].pop;
        const rain_of_11 = data.hourly[11].pop;
        const rain_of_12 = data.hourly[12].pop;

        // time
        time_1.textContent = `${time_of_1.toLocaleTimeString()}`;
        time_2.textContent = `${time_of_2.toLocaleTimeString()}`;
        time_3.textContent = `${time_of_3.toLocaleTimeString()}`;
        time_4.textContent = `${time_of_4.toLocaleTimeString()}`;
        time_5.textContent = `${time_of_5.toLocaleTimeString()}`;
        time_6.textContent = `${time_of_6.toLocaleTimeString()}`;
        time_7.textContent = `${time_of_7.toLocaleTimeString()}`;
        time_8.textContent = `${time_of_8.toLocaleTimeString()}`;
        time_9.textContent = `${time_of_9.toLocaleTimeString()}`;
        time_10.textContent = `${time_of_10.toLocaleTimeString()}`;
        time_11.textContent = `${time_of_11.toLocaleTimeString()}`;
        time_12.textContent = `${time_of_12.toLocaleTimeString()}`;
        
        // temperature
        temp_1.textContent = `${temp_of_1.toFixed(2)}°F`;
        temp_2.textContent = `${temp_of_2.toFixed(2)}°F`;
        temp_3.textContent = `${temp_of_3.toFixed(2)}°F`;
        temp_4.textContent = `${temp_of_4.toFixed(2)}°F`;
        temp_5.textContent = `${temp_of_5.toFixed(2)}°F`;
        temp_6.textContent = `${temp_of_6.toFixed(2)}°F`;
        temp_7.textContent = `${temp_of_7.toFixed(2)}°F`;
        temp_8.textContent = `${temp_of_8.toFixed(2)}°F`;
        temp_9.textContent = `${temp_of_9.toFixed(2)}°F`;
        temp_10.textContent = `${temp_of_10.toFixed(2)}°F`;
        temp_11.textContent = `${temp_of_11.toFixed(2)}°F`;
        temp_12.textContent = `${temp_of_12.toFixed(2)}°F`;

        // rain
        rain_1.textContent = `${Math.round(rain_of_1 * 100)}%`;
        rain_2.textContent = `${Math.round(rain_of_2 * 100)}%`;
        rain_3.textContent = `${Math.round(rain_of_3 * 100)}%`;
        rain_4.textContent = `${Math.round(rain_of_4 * 100)}%`;
        rain_5.textContent = `${Math.round(rain_of_5 * 100)}%`;
        rain_6.textContent = `${Math.round(rain_of_6 * 100)}%`;
        rain_7.textContent = `${Math.round(rain_of_7 * 100)}%`;
        rain_8.textContent = `${Math.round(rain_of_8 * 100)}%`;
        rain_9.textContent = `${Math.round(rain_of_9 * 100)}%`;
        rain_10.textContent = `${Math.round(rain_of_10 * 100)}%`;
        rain_11.textContent = `${Math.round(rain_of_11 * 100)}%`;
        rain_12.textContent = `${Math.round(rain_of_12 * 100)}%`;
    });

// });
// });

