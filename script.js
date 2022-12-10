// Dark/Light mode -theme.....

var theme = document.getElementById("theme");
theme.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    theme.src = "dark theme icon/sun.png";
  } else {
    theme.src = "dark theme icon/moon.png";
  }
};

// coupon code ..........

let popupCloseButton = document.querySelector("#popupClose");
popupCloseButton.addEventListener("click", () => {
  document.querySelector("#coupon-div").style.display = "none";
});

// Location and Weather

const loc = document.getElementById("weatherLocation");
const tempicon = document.getElementById("weatherIcon");
const weatherValue = document.getElementById("weatherTemperature");
const weatherDescription = document.getElementById("weatherDescription");
const navbarLocation = document.getElementsByClassName("location");

window.addEventListener('load',geolocation)


function geolocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(showPosition)
  }else{
    return 'geo not supported'
  }
}

const showPosition = (data) =>{
let lat = data.coords.latitude;
let long = data.coords.longitude
// let weatherLocation = `latitude is ${lat} and long is ${long}`
// loc.innerText= weatherLocation;

const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;

//api calling using fetch
fetch( url ,{method : 'GET'})

// return Promise
.then ((res) => res.json())

//return data
.then((data)=>{
  console.log(data);
  let city = data.city.name;
  let temp = data.list[0].temp.day
  let description = data.list[0].weather[0].description
  // console.log(city);
  // console.log(temp);
  let cityFinal = city;
  loc.innerText = cityFinal;
  let tempFinal = temp;
  weatherValue.innerText = tempFinal;
  let finalDescription = description;
  weatherDescription.innerText = finalDescription;
  let navCity = data.city.name
  
})


}


