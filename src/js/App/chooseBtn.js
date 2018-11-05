import getWeather2 from "./getWeather2.js";
import thisCityChoose from "./city.js";

//отдельно функция для кнопок времени суток
let timeDay = document.getElementById("timePeriod"),
    now,
    timeDayBtn = timeDay.getElementsByTagName("div"),
    city = document.getElementsByClassName("city");


let chooseBtn = (e) => {
    city = document.getElementsByClassName("city")[0].innerText;
    if (e.target.id === "timeNow") {
        now = 0;
    } else if (e.target.id === "time0") {
        now = 2;
    } else if (e.target.id === "time1") {
        now = 4;
    } else if (e.target.id === "time2") {
        now = 6;
    } else if (e.target.id === "time3") {
        now = 8;
    }

    for (let i=0; i<timeDayBtn.length; i++) {
        timeDayBtn[i].className = (timeDayBtn[i].id===e.target.id)?"time-Day-choose":"time-Day";
    }
//    
    getWeather2(city, now)   
};
    
timeDay.addEventListener("click", chooseBtn);
export default chooseBtn;
