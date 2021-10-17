"use strict";

// changing day name and day number and the month;
const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.querySelector(".dayNow").textContent = days[d.getDay()];
document.querySelector(".dateNumNow").textContent = d.getDate();
document.querySelector(".dateMonthNow").textContent = months[d.getMonth()];

d.setDate(d.getDate() + 1);
document.querySelector(".dayTomo").textContent = days[d.getDay()];

d.setDate(d.getDate() + 1);
document.querySelector(".dayAftr").textContent = days[d.getDay()];


// changing weather;
let inpt = document.querySelector(".inpt");
let btn = document.querySelector("#search");

async function getWeather(country)
{
    let response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=8d2728c47d184413983192352210910&q=${country}&days=3`);
    let result = await response.json();

        // changing weather today;
        document.querySelector(".city").textContent = result.location.name;
        document.querySelector(".maxNow").textContent = result.current.temp_c;
        document.querySelector(".iconNow").setAttribute("src", `https:${result.current.condition.icon}`);
        document.querySelector(".noteContNow").textContent = result.current.condition.text;
        document.querySelector(".wind_mphNow").textContent = result.current.wind_mph;
        document.querySelector(".wind_kph").textContent = result.current.wind_kph;
        document.querySelector(".wind_degree").textContent = result.current.wind_dir;
    
        // changing weather tomorrow;
        document.querySelector(".iconTomo").setAttribute("src", `https:${result.forecast.forecastday[1].day.condition.icon}`);
        document.querySelector(".maxTomo").textContent = result.forecast.forecastday[1].day.maxtemp_c;
        document.querySelector(".minTomo").textContent = result.forecast.forecastday[1].day.mintemp_c;
        document.querySelector(".noteContTomo").textContent = result.forecast.forecastday[1].day.condition.text;
        
        // changing weather afterTomorrow;
        document.querySelector(".iconAftr").setAttribute("src", `https:${result.forecast.forecastday[2].day.condition.icon}`);
        document.querySelector(".maxAftr").textContent = result.forecast.forecastday[2].day.maxtemp_c;
        document.querySelector(".minAfter").textContent = result.forecast.forecastday[2].day.mintemp_c;
        document.querySelector(".noteContAftr").textContent = result.forecast.forecastday[2].day.condition.text;
    }
    
btn.addEventListener("click", (e) =>
{
    e.preventDefault();
    getWeather(inpt.value)
});


