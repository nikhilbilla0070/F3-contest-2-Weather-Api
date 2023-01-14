document.getElementById("latitude").style.display = "none";
document.getElementById("longitude").style.display = "none";
document.getElementById("weather-details").style.display = "none";
function getWeatherDetails() {
  document.getElementById("latitude").style.display = "block";
  document.getElementById("longitude").style.display = "block";
  document.getElementById("btn").style.display = "none";
  document.getElementById("weather-details").style.display = "block";

  getLocation();
  document.getElementById("map-image").style.display = "block";
}

function getLocation() {
  navigator.geolocation.getCurrentPosition((sucess) => {
    let latitude = sucess.coords.latitude;
    let longitude = sucess.coords.longitude;
    console.log(latitude, longitude);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=da94e9c3dac87d1fb060f9f10136c311`;

    async function getData(url) {
      const response = await fetch(url);
      const Data = await response.json();
      console.log(Data);

      document.getElementById("latitude").innerHTML += `${Data.coord.lat}`;
      document.getElementById("longitude").innerHTML += `${Data.coord.lon}`;

      document.getElementById("location").innerHTML += `${Data.name}`;
      document.getElementById("lat").innerHTML += `${Data.coord.lat}`;
      document.getElementById("long").innerHTML += `${Data.coord.lon}`;
      document.getElementById("timeZone").innerHTML += `${Data.timezone}`;
      document.getElementById("windSpeed").innerHTML += `${Data.wind.speed}`;
      document.getElementById("pressure").innerHTML += `${Data.main.pressure}`;
      document.getElementById("humidity").innerHTML += `${Data.main.humidity}`;
      document.getElementById("windDirection").innerHTML += `${Data.wind.deg}`;
      document.getElementById("uvIndex").innerHTML += `${Data.clouds.all}`;
      document.getElementById(
        "feelsLike"
      ).innerHTML += `${Data.main.feels_like}`;
    }
    getData(url);
  });
}
