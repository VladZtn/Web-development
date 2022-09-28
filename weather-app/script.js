const timeBlock = document.getElementById('time');
const weatherApi = {
    key: "7dfdb8570e6b8a33cd86a34d90d68ade",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
};

const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = "block";
    };
});

function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
};

function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let temperature = document.getElementById('temp');
    temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let minMaxTemp = document.getElementById('min-max');
    minMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C (min) / ${Math.ceil(weather.main.temp_max)}&deg;C (max) `;

    let weatherType = document.getElementById('clouds-text');
    weatherType.innerText = `${weather.clouds.all}%`;

    let windSpeed = document.getElementById('wind-speed');
    windSpeed.innerText = `${weather.wind.speed}m/s`;

    let likeAs = document.getElementById('like-as');
    likeAs.innerText = `Feels like: ${weather.main.feels_like}°C`;

    let humidity = document.getElementById('humidity-text');
    humidity.innerText = `${weather.main.humidity}%`;

    let gauge = document.getElementById('gauge-text');
    gauge.innerText = `${weather.main.pressure}Pa`;

    let date = document.getElementById('date');
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    // let imgBlock = document.getElementById('img');

    if (weatherType.textContent == 'Clear') {
        document.body.style.backgroundImage = "url('images/clear.jpg')";
        // temperature.innerHTML = "<img src='/images/clear.png' height='50' width='50'>";

    } else if (weatherType.textContent == 'Clouds') {
        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        // imgBlock.innerHTML = "<img src='/images/cloud.png' height='50' width='50'>";
    
    }else if (weatherType.textContent == 'Haze') {
        document.body.style.backgroundImage = "url('images/cloud.jpg')";
        // imgBlock.innerHTML = "<img src='/images/haze.png' height='50' width='50'>";

    } else if (weatherType.textContent == 'Rain') {
        document.body.style.backgroundImage = "url('images/rain.jpg')";
        // imgBlock.innerHTML = "<img src='/images/rainy.png' height='50' width='50'>";

    } else if (weatherType.textContent == 'Snow') {
        document.body.style.backgroundImage = "url('images/snow.jpg')";
        // imgBlock.innerHTML = "<img src='/images/snow.png' height='50' width='50'>";

    } else if (weatherType.textContent == 'Thunderstorm') {
        document.body.style.backgroundImage = "url('images/thunderstorm.jpg')";
        // imgBlock.innerHTML = "<img src='/images/storm.png' height='50' width='50'>";
    }
};

// const now = new Date();
// let hour = now.getHours(); 
// let minutes = now.getMinutes();
// timeBlock.innerText = `${hour}:${minutes}`;
    

function dateManage(dateArg) {
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];
    return `${date} ${month} (${day}), ${year}`;
}