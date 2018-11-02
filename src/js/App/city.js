import getWeather from "./getWeather.js";
//кнопка подтверждения выбора города

let btnCity = document.getElementById("button-city"),
    cityMenu = document.querySelector(".city-menu"),
    cities = document.getElementsByName("city"),
    now,
    city = "Минск",
    weatherValue = document.getElementById("show-weater-value"),
    cityValue = weatherValue.querySelector(".city");

let thisCityChoose = (e) => {
    if (e.target.id === "button-city") {
    for (let i=0; i<cities.length; i++) {
        if (cities[i].selected == true) {
            city = cities[i].value;
            cityValue.innerText = city;
            now = 0;
            getWeather(city);
        }      
    }
    //console.log(e);
    }
};
cityMenu.addEventListener("click", thisCityChoose);
export default thisCityChoose;