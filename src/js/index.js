import forecastNext from "./forecastNext";
let weatherValue = document.getElementById("show-weater-value"),
    pictureValue = weatherValue.querySelector(".picture"),
    cityValue = weatherValue.querySelector(".city"),
    temperatureValue = weatherValue.querySelector(".temperature"),
    windValue = weatherValue.querySelector(".wind-derection"),
    humidityValue = weatherValue.querySelector(".humidity"),
    pressureValue = weatherValue.querySelector(".pressure"),
    accept = document.getElementById("button-city"),
    page = document.getElementById("app"),
    partDay = ["Утро","День","Вечер","Ночь"];


let timeDay = document.getElementById("timeNow");
        
    for (let i=0; i<4; i++) {
        divTime = document.createElement("div");
        divTime.id = "time"+i;
        divTime.className = "time-Day";
        divTime.innerHTML = partDay[i];
        timeDay.appendChild(divTime);
    }
for (let i=1; i<=5; i++) {
    let nextDaysDiv = document.createElement("div"),
        dateDiv = "<div id=\"date"+i+"\" class = \"classDate\"></div>",
        dayDiv = "<div id=\"day"+i+"\" class = \"classDay\"></div>",
        tempDiv = "<div id=\"temp"+i+"\" class = \"classTemp\"></div>",
         pictDiv = "<div id=\"pict"+i+"\" class = \"classPict\"></div>",
        addElem = page.querySelector(".nextDays");
    nextDaysDiv.className = "day"+i+" days";    
    nextDaysDiv.innerHTML = dateDiv+dayDiv+tempDiv+pictDiv;
    addElem.appendChild(nextDaysDiv);
    

document.getElementById("button-city").onclick = function(){
    let cities = document.getElementsByName("city");
    for (let i=0; i<cities.length; i++) {
        if (cities[i].selected == true) {
            city = cities[i].value;
            cityValue.innerText = city;
            getWeather(city);
        }      
    }
}

function getWeather (city="Минск") {
    urlWeather = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric,by&APPID=ddbd161541d1f7b82b0b6eeaea3698b6";
    fetch(urlWeather).then((response) => {
        const promise  = response.json();
        console.log(promise);
        return promise;
    }).then((data) => {
        nowDate();
        forecastNow(data);
        forecastNext(data);
    })};
getWeather();

let nowDate =() => {
    let time = new Date();
        year = time.getFullYear();
        month = time.getMonth()+1;
        day = time.getDate();
    //console.log (now)
    document.getElementsByClassName("date")[0].innerText = day+"/"+month+"/"+year;
}

let forecastNow = (data) =>{
    document.getElementById("getSpeed").innerText = Math.round(data.list[0].wind.speed);
    //Направление ветра
    let windDeg = Math.round(data.list[0].wind.deg);
    if (windDeg>337.5 && windDeg<=22.5 ) {
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
    document.getElementById("getTemp").innerText = Math.round(data.list[0].main.temp_max-273);
    document.getElementById("getHumidity").innerText = data.list[0].main.humidity;
    document.getElementById("getPress").innerText = Math.round(data.list[0].main.pressure/1.333);
    let nowWeater = data.list[0].weather[0].main,
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
    
    
    
}









