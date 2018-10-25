let weatherValue = document.getElementById("show-weater-value"),
    city = "Минск",
    pictureValue = weatherValue.querySelector(".picture"),
    cityValue = weatherValue.querySelector(".city"),
    temperatureValue = weatherValue.querySelector(".temperature"),
    windValue = weatherValue.querySelector(".wind-derection"),
    humidityValue = weatherValue.querySelector(".humidity"),
    pressureValue = weatherValue.querySelector(".pressure"),
    accept = document.getElementById("button-city"),
    page = document.getElementById("app"),
    partDay = ["Утро","День","Вечер","Ночь"],
    chooseTime = new Date(),
    hourTime = chooseTime.getHours(),
    timeDay = document.getElementById("timePeriod"),
    now = 0;

let btnPartDay = () =>{
    let choosePartDay = () => {
    let partDay1 = partDay.shift();
    partDay.push(partDay1)
    };
    //let chooseTime = new Date(),
        //hourTime = chooseTime.getHours(),
        //timeDay = document.getElementById("timeNow");
    //в зависимости от времени сейчас выстраиваем кнопки времени суток на ближайшие 24 часа     
    if (hourTime>=6 && hourTime<12) {
        for (let i=0; i<1; i++) {
            choosePartDay();
        }
    }  else if (hourTime>=12 && hourTime<18) {
        for (let i=0; i<2; i++) {
            choosePartDay();
        }
    }  else if (hourTime>=18 && hourTime<24) {
        for (let i=0; i<3; i++) {
            choosePartDay();
        }
    } 

    for (let i=0; i<4; i++) {
        divTime = document.createElement("div");
        divTime.id = "time"+i;
        divTime.className = "time-Day";
        divTime.innerHTML = partDay[i];
        timeDay.appendChild(divTime);
    }
    divNow = document.createElement("div");
    divNow.id = "timeNow";
    divNow.className = "time-Day";
    divNow.innerHTML = "Сейчас";
    timeDay.insertBefore(divNow, timeDay.children[0]);
}

btnPartDay();

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
}

document.getElementById("button-city").onclick = function(){
    let cities = document.getElementsByName("city");
    for (let i=0; i<cities.length; i++) {
        if (cities[i].selected == true) {
            city = cities[i].value;
            cityValue.innerText = city;
            now = 0;
            getWeather(city);
        }      
    }
}

let getWeather = () => {
    urlWeather = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric,by&APPID=ddbd161541d1f7b82b0b6eeaea3698b6";
    fetch(urlWeather).then((response) => {
        const promise  = response.json();
        console.log(promise);
        return promise;
    }).then((data) => {
        //console.log(data);
        
        forecastMain(data);
        forecastNext(data);
        //timesOfDay(data)
    })};
getWeather();
let getWeather2 = () => {
    urlWeather = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric,by&APPID=ddbd161541d1f7b82b0b6eeaea3698b6";
    fetch(urlWeather).then((response) => {
        const promise  = response.json();
        return promise;
    }).then((data) => {
        forecastMain(data);
        console.log(data);
    })};

let nowDate =() => {
    let time = new Date();
        year = time.getFullYear();
        month = time.getMonth()+1;
        day = time.getDate();
    //console.log (now)
    document.getElementsByClassName("date")[0].innerText = day+"/"+month+"/"+year;
};
nowDate();

chooseBtn = (e) => {
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


let forecastNext = (data) => {
    for (let i=1; i<=5; i++) {

        let thsDayMs = data.list[i*8-1].dt*1000,
            thsDay = new Date(thsDayMs),
            year = thsDay.getFullYear(),
            month = thsDay.getMonth()+1,
            weekDay = thsDay.getDate(),
            day = thsDay.getDay(),
            hour = thsDay.getHours();
        //console.log(hour);    
        day = day%7;
           if (day === 1) {
                day = "Понедельник";
            } else if (day === 2) {
                day = "Вторник";
            } else if(day === 3) {
                day = "Среда";
            } else if(day === 4) {
                day = "Четверг";
            } else if(day === 5) {
                day = "Пятница";
            } else if(day === 6) {
                day = "Суббота";
            } else {
                day = "Воскресенье";
            };

        let images = data.list[i*8-1].weather[0].main,
            src;
        if(images === "Clear Sky") {
            hour<6 || hour>18?src = "moon":src="sun";
        } else if (images === "Cloudy") {
            hour<6 || hour>18?src = "moon-cloud":src="cloudy-sun"
        } else if (images === "Rain") {
            src = "rain";
        } else if (images === "Snow") {
            src = "snow";
        } else {
            src = "cloud";
        }
        document.getElementById("date"+i).innerText = weekDay + "." +month+ "." +year;
        document.getElementById("day"+i).innerText = day;
        document.getElementById("temp"+i).innerText = Math.round(data.list[i*8-1].main.temp_max-273) + " C";
        document.getElementById("pict"+i).innerHTML = "<img src=\"./src/img/weahter-icons/"+src+".png\">";
    }
}