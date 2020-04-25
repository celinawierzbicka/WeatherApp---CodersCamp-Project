const myApiKey = "9dfeb526b6057ccf8713918d0d44c824";

let searchBtn = document.getElementById("search-btn");
let searchText = document.getElementById("search-txt");
let cityName = document.getElementById("name");
let date = document.getElementById("date-now");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let description = document.getElementById("describe");

const today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; 
let yyyy = today.getFullYear();
if(dd<10){
    dd='0'+dd;
} 
if(mm<10){
    mm='0'+mm;
} 

let now = `${dd}.${mm}.${yyyy}`

searchBtn.addEventListener("click", findWeather);
searchText.addEventListener("keyup", enterPressed);

function enterPressed(event) {
    if (event.key === "Enter") {
      findWeather();
    }
  }

  function findWeather() {
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${searchText.value}&appid=${myApiKey}`;
    fetch(link)
    .then((res) => res.json())
    .then((data) => {
        icon.src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
        cityName.innerHTML = data.name;
        date.innerHTML = now;
        temperature.innerHTML = parseInt(data.main.temp - 273) + "°C";
        description.innerHTML = data.weather[0].description;
        searchText.value='';
        })
    }
