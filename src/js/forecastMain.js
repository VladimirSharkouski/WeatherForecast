import getWeather from "./getWeather.js";
import getWeather2 from "./dayTime.js";

let now = 0,
    weatherValue = document.getElementById("show-weater-value"),
    pictureValue = weatherValue.querySelector(".picture");

let forecastMain = (data) =>{
        document.getElementById("getSpeed").innerText = Math.round(data.list[now].wind.speed);
        //Направление ветра
        let windDeg = Math.round(data.list[now].wind.deg);
        if (windDeg>337.5 || windDeg<=22.5 ) {
            windDeg = "С"
        } else if (windDeg>22.5 && windDeg<=67.5 ) {
            windDeg = "С-В"
        } else if (windDeg>67.5 && windDeg<=112.5 ) {
            windDeg = "В"
        } else if (windDeg>1122.5 && windDeg<=157.5 ) {
            windDeg = "Ю-В"
        }  else if (windDeg>157.5 && windDeg<=202.5 ) {
            windDeg = "Ю"
        } else if (windDeg>202.5 && windDeg<=247.5 ) {
            windDeg = "Ю-З"
        } else if (windDeg>247.5 && windDeg<=292.5 ) {
            windDeg = "З"
        } else {
            windDeg = "С-З"
        };

        document.getElementById("getDerection").innerText = 
        windDeg;
        document.getElementById("getTemp").innerText = Math.round(data.list[now].main.temp_max-273);
        document.getElementById("getHumidity").innerText = data.list[now].main.humidity;
        document.getElementById("getPress").innerText = Math.round(data.list[now].main.pressure/1.333);
        let nowWeater = data.list[now].weather[0].main,
            nowWeaterImg;
        if(nowWeater === "Clear Sky") {
                hour<6 || hour>18?nowWeaterImg = "moon":nowWeaterImg="sun";
            } else if (nowWeater === "Cloudy") {
                hour<6 || hour>18?nowWeaterImg = "moon-cloud":nowWeaterImg="cloudy-sun"
            } else if (nowWeater === "Rain") {
                nowWeaterImg = "rain";
            } else if (nowWeater === "Snow") {
                nowWeaterImg = "snow";
            } else {
                nowWeaterImg = "cloud";
            }
        pictureValue.innerHTML = "<img class=\"weather-icon\" src=\"./src/img/weahter-icons/"+nowWeaterImg+".png\">";   
    };
export default forecastMain;