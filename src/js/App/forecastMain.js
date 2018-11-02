//import AppFunc from "./AppFunc.js";
let now,
    weatherValue = document.getElementById("show-weater-value"),
    cityValue = weatherValue.querySelector(".city"),
    pictureValue = weatherValue.querySelector(".picture"),
    toggleRus = document.getElementById("toggle-rus");
let forecastMain = (data, now) =>{
    console.log(data);
    document.getElementById("getSpeed").innerText = Math.round(data.list[now].wind.speed);
    //Направление ветра
    let windDeg = Math.round(data.list[now].wind.deg);
    if (windDeg>337.5 || windDeg<=22.5 ) {
        windDeg = (toggleRus.checked)?"С":"N";
    } else if (windDeg>22.5 && windDeg<=67.5 ) {
        windDeg = (toggleRus.checked)?"С-В":"N-E";
    } else if (windDeg>67.5 && windDeg<=112.5 ) {
        windDeg = (toggleRus.checked)?"В":"E";
    } else if (windDeg>1122.5 && windDeg<=157.5 ) {
        windDeg = (toggleRus.checked)?"Ю-В":"S-E";
    }  else if (windDeg>157.5 && windDeg<=202.5 ) {
        windDeg = (toggleRus.checked)?"Ю":"S";
    } else if (windDeg>202.5 && windDeg<=247.5 ) {
        windDeg = (toggleRus.checked)?"Ю-З":"S-W";
    } else if (windDeg>247.5 && windDeg<=292.5 ) {
        windDeg = (toggleRus.checked)?"З":"W";
    } else {
        windDeg = (toggleRus.checked)?"С-З":"N-W";
    };
    document.getElementById("getDerection").innerText = windDeg;
    document.getElementById("getTemp").innerText = Math.round(data.list[now].main.temp_max-273);
    document.getElementById("getHumidity").innerText = data.list[now].main.humidity;
    document.getElementById("getPress").innerText = Math.round(data.list[now].main.pressure/1.333);
    let nowWeater = data.list[now].weather[0].main,
        nowWeaterImg;
    let nowHour = new Date().getHours()+now*3,
        hour = (nowHour>=24)? nowHour%24:nowHour;
    if(nowWeater === "Clear") {
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
forecastMain;
export default forecastMain;