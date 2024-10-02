const apikey = "f6c513222266ce22e6d6ae7a6570fbf5";

let input = document.querySelector("input");
let button = document.getElementById("btn");
let icon = document.querySelector(".icon");
let weather = document.querySelector(".weather");
let temperature = document.querySelector(".temperature");
let description = document.querySelector(".description");

button.addEventListener("click", () => {
  let city = input.value;
  getWeather(city);
});

function getWeather(city) {
  console.log(city);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const iconCode = data.weather[0].icon;
      icon.innerHTML = `<img src = "https://openweathermap.org/img/wn/${iconCode}.png" alt="weather icon"/>`;

      const weatherCity = data.name;
      const weatherCountry = data.sys.country;
      weather.innerHTML = `<h2>${weatherCity}, ${weatherCountry}</h2>`;

      let weatherTemp = data.main.temp;
      weatherTemp = weatherTemp - 273;
      const temp = weatherTemp.toFixed(2);
      temperature.innerHTML = `<h1>${temp}°C</h1>`;

      const weatherDesc = data.weather[0].description;
      description.innerHTML = weatherDesc;
    });
}
