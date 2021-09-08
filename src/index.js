///Time

function formatTime(now) {
  let currentHour = now.getHours();
  let currentMinutes = now.getMinutes();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  return `${currentHour}:${currentMinutes}`;
}

let currentTime = document.querySelector("#currentTime");
let now = new Date();
currentTime.innerHTML = formatTime(now);

///Day
function formatDay(currentDay) {
  let youbi = new Date();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[youbi.getDay()];
  return `${day}`;
}

let currentDay = document.querySelector("h2.sunday");
currentDay.innerHTML = formatDay(currentDay);

///function goSearch(event) {
///event.preventDefault();
///let searchedCity = document.querySelector("#search-city");
///let inputCity = document.querySelector("#input-city");
/// searchedCity.innerHTML = `${inputCity.value}`;
///}

///let searchForm = document.querySelector("#search-form");
///searchForm.addEventListener("submit", goSearch);

///

let celsius = "27";
let fahren = Math.round(celsius * 1.8 + 32);
console.log(fahren);

function changeFahren(event) {
  event.preventDefault();
  let celsius = document.querySelector("#twenty-seven");
  celsius.innerHTML = fahren;
}
let linkFahren = document.querySelector(".fahrenheit");
linkFahren.addEventListener("click", changeFahren);

function changeCel(event) {
  event.preventDefault();
  let fahren = document.querySelector("#twenty-seven");
  fahren.innerHTML = celsius;
}
let linkCel = document.querySelector(".celsius");
linkCel.addEventListener("click", changeCel);

///#1 Serach Engine Homework

function showTemperature(response) {
  let updateTemp = document.querySelector("#twenty-seven");
  updateTemp.innerHTML = Math.round(response.data.main.temp);
  let updateCity = document.querySelector("h1");
  updateCity.innerHTML = response.data.name;

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
}
function editCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#input-city");
  let key = "7b1f52690adaedee63bcaca0fad04ef5";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}
  &appid=${key}&units=metric`;
  axios.get(url).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", editCity);

/// #2 Current Location

function showTemperatureHere(response) {
  let currentTemp = Math.round(response.data.main.temp);
  let changeTemp = document.querySelector("#twenty-seven");
  let h1 = document.querySelector("h1");
  changeTemp.innerHTML = currentTemp;
  h1.innerHTML = response.data.name;

  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = response.data.wind.speed;
}
function getPosition(position) {
  let lati = position.coords.latitude;
  let longi = position.coords.longitude;
  let apiKey = "7b1f52690adaedee63bcaca0fad04ef5";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(showTemperatureHere);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(getPosition);
}
let locationButton = document.querySelector("#current-location-button");
locationButton.addEventListener("click", getCurrentPosition);
