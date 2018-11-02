import getWeather2 from "./getWeather2.js";

//отдельно функция для кнопок времени суток
let timeDay = document.getElementById("timePeriod"),
    now,
    city = "Минск",
    weatherValue = document.getElementById("show-weater-value"),
    cityValue = weatherValue.querySelector(".city"),
    pictureValue = weatherValue.querySelector(".picture");


let chooseBtn = (e) => {
        if (e.target.id === "timeNow") {
            now = 0;
            getWeather2(city, now)
        } else if (e.target.id === "time0") {
            now = 2;
            getWeather2(city, now)
        } else if (e.target.id == "time1") {
            now = 4;
            getWeather2(city, now)
        } else if (e.target.id == "time2") {
            now = 6;
            getWeather2(city, now)
        } else if (e.target.id == "time3") {
            now = 8;
            getWeather2(city, now)
        }
    };
    
timeDay.addEventListener("click", chooseBtn);
export default chooseBtn;
