import getWeather from "./getWeather.js";
//кнопка подтверждения выбора города

let btnCity = document.getElementById("button-city"),
    cityMenu = document.querySelector(".city-menu"),
    cities = document.getElementsByName("city"),
    now,
    city = "Минск",
    weatherValue = document.getElementById("show-weater-value"),
    cityValue = weatherValue.querySelector(".city"),
    timeDay = document.getElementById("timePeriod");

let thisCityChoose = (e) => {
    if (e.target.id === "button-city") {
    for (let i=0; i<cities.length; i++) {
        if (cities[i].selected == true) {
            city = cities[i].value;
            cityValue.innerText = city;
            now = 0;
            getWeather(city);
            timeDay.children[0].className = "time-Day-choose";
            for (let i=1; i<timeDay.children.length; i++) {
                timeDay.children[i].className = "time-Day";
            }
            
        }      
    }
    //console.log(e);
    }
};
cityMenu.addEventListener("click", thisCityChoose);
export default thisCityChoose;