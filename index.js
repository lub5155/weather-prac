
function getWeather() {
let city = document.getElementById("inpu").value;
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=97e81509f0a8e62994237002427e1a4b`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
         document.getElementById("name").textContent = data.name;
         document.getElementById("tempp").textContent = data.main.temp + "°C";
         document.getElementById("huu").textContent=data.main.humidity+"%"
         document.getElementById("wuu").textContent=data.wind.speed+"Km/h"
         let w = data.weather[0].main;
         let icon = "";
         if (w == "Rain") icon = "rain.png";
         else if (w == "Clear") icon = "clear.png";
         else if (w == "Drizzle") icon = "drizzle.png";
         else if (w == "Clouds") icon = "clouds.png";
         else if (w == "Snow") icon = "snow.png";
         else if (w == "Mist" || w == "Fog" || w == "Haze") icon = "mist.png";
         else icon = "default.png";
         document.getElementById("imm").innerHTML = `<img src="${icon}" id="imgs">`;
      })
      .catch(err => console.log("Error:", err));
    }