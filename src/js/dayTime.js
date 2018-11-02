import forecastMain from "./forecastMain.js";
let timeDay = document.getElementById("timePeriod"),
    city,
    now;

let chooseBtn = (e) => {
    if (e.target.id === "timeNow") {
        now = 0;
        getWeather2()
    } else if (e.target.id === "time0") {
        now = 2;
        getWeather2()
    } else if (e.target.id == "time1") {
        now = 4;
        getWeather2()
    } else if (e.target.id == "time2") {
        now = 6;
        getWeather2()
    } else if (e.target.id == "time3") {
        now = 8;
        getWeather2()
    }
}
timeDay.addEventListener("click", chooseBtn);
    
let getWeather2 = () => {
    let urlWeather = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric,by&APPID=ddbd161541d1f7b82b0b6eeaea3698b6";
    fetch(urlWeather).then((response) => {
        const promise  = response.json();
        return promise;
    }).then((data) => {
        forecastMain(data);
        console.log(data);
    })
};

export default getWeather2;