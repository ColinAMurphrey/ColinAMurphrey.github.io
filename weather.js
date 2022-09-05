const api = "ZWEyZGYwMmJkZGRmOTI2NzJlZGFkNTE0NzcxZjM3MWU";


window.addEventListener('load', () => {

    if (navigator.geolocation) {


        navigator.geolocation.getCurrentPosition((position) => {

            let long = position.coords.longitude;
            let lat = position.coords.latitude;
            const base = `https://pro.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${atob(api)}&units=imperial`;
            const hourlyUrl = `https://pro.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${atob(api)}&units=imperial`;

            // Main Weather
            fetch(base)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const { temp } = data.main;
                const place = data.name;
                const { description, icon } = data.weather[0];
                const { sunrise, sunset } = data.sys;

                const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                
                // Converting Epoch (Unix) time to GMT
                const sunriseGMT = new Date(sunrise * 1000);
                const sunsetGMT = new Date(sunset * 1000);

                // Interacting with DOM to show data
                const iconImg = document.getElementById('weather-icon');
                const loc = document.querySelector('.location');
                const tempF = document.querySelector('.f');
                const desc = document.querySelector('.desc');
                const sunriseDOM = document.querySelector('.sunrise');
                const sunsetDOM = document.querySelector('.sunset');

                iconImg.src = iconUrl;
                loc.textContent = `${place}`;
                desc.textContent = `${description}`;
                tempF.textContent = `${temp.toFixed(0)}°F`;
                sunriseDOM.textContent = `${sunriseGMT.toLocaleDateString()}, ${sunriseGMT.toLocaleTimeString()}`;
                sunsetDOM.textContent = `${sunsetGMT.toLocaleDateString()}, ${sunsetGMT.toLocaleTimeString()}`;


            });

            // Hourly Weather
            fetch(hourlyUrl)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    for (rows = 1; rows <= 24; rows++) {
                        for (col = 1; col <= 4; col++) {
                            var icons = data.hourly[rows].weather[0].icon;
                            var iconUrl = `https://openweathermap.org/img/wn/${icons}@2x.png`;
                            if (col === 1) { 
                                var hourTime = (new Date(data.hourly[rows].dt * 1000)).getHours();
                                var ampm = hourTime >= 12 ? 'pm' : 'am';
                                hourTime = hourTime % 12;
                                hourTime = hourTime ? hourTime : 12; // the hour '0' should be '12'
                                document.getElementById(`time-${rows}`).innerHTML = `${hourTime}${ampm}`; 
                            }
                            if (col === 2) { document.getElementById(`temp-${rows}`).innerHTML = `${(data.hourly[rows].temp).toFixed(0)}°F`; } 
                            if (col === 3) { document.getElementById(`rain-${rows}`).innerHTML = `${Math.round(data.hourly[rows].pop * 100)}% `; } // + `<img src="${iconUrl}" class="shadow p-1 mb-1 bg-secondary rounded-circle" width="20%" height="20%">`; }
                            if (col === 4) { document.getElementById(`status-${rows}`).innerHTML = `<img src="${iconUrl}" class="shadow p-1 mb-1 bg-secondary rounded-circle" width="35%" height="auto">`}
                        }
                        var hourTime_head = (new Date(data.hourly[rows].dt * 1000)).getHours();
                        var ampm_head = hourTime_head >= 12 ? 'pm' : 'am';
                        hourTime_head = hourTime_head % 12;
                        hourTime_head = hourTime_head ? hourTime_head : 12; // the hour '0' should be '12'
                        document.getElementById(`time-${rows}-accordion`).innerHTML = `${hourTime_head}${ampm_head}`;
                        document.getElementById(`wind-speed-${rows}`).innerHTML = `Wind speed: ${data.hourly[rows].wind_speed} mph`;
                        document.getElementById(`feels-like-${rows}`).innerHTML = `Feels like: ${data.hourly[rows].feels_like}&deg;F`;
                        document.getElementById(`humidity-${rows}`).innerHTML = `Humidity: ${data.hourly[rows].humidity}%`;
                    }

                    // var wind_speed = data.hourly[1].wind_speed;
                    // document.getElementById('wind-speed-1').innerHTML = `Wind speed:    ${wind_speed}`;
                }
            ) 
        })
    }
})