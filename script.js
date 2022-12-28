// Dark/Light mode -theme..............!

var theme = document.getElementById("theme");
theme.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    theme.src = "dark theme icon/sun.png";
  } else {
    theme.src = "dark theme icon/moon.png";
  }
};

// coupon code ........................!

let popupCloseButton = document.querySelector("#popupClose");
let body = document.querySelector("body");
popupCloseButton.addEventListener("click", () => {
  document.querySelector("#coupon-div").style.display = "none";
  body.style.overflowY = "visible";
});

// Location and Weather..................!

const loc = document.getElementById("weatherLocation");
const tempicon = document.getElementById("weatherIcon");
const weatherValue = document.getElementById("weatherTemperature");
const weatherDescription = document.getElementById("weatherDescription");
const navbarLocation = document.getElementById("india");

window.addEventListener("load", geolocation);

function geolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    return "geo not supported";
  }
}

const showPosition = (data) => {
  let lat = data.coords.latitude;
  let long = data.coords.longitude;
  // let weatherLocation = `latitude is ${lat} and long is ${long}`
  // loc.innerText= weatherLocation;

  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

  //api calling using fetch
  fetch(url, { method: "GET" })
    // return Promise
    .then((res) => res.json())

    //return data
    .then((data) => {
      console.log(data);
      let city = data.city.name;
      let temp = data.list[0].temp.day;
      let description = data.list[0].weather[0].description;
      let country = data.city.country;

      let countryFinal = country;
      let cityFinal = city;
      let tempFinal = temp;
      let finalDescription = description;

      loc.innerText = `${cityFinal}, ${countryFinal}`;
      weatherValue.innerText = tempFinal;
      weatherDescription.innerText = finalDescription;
      navbarLocation.innerText = cityFinal;
    });
};
