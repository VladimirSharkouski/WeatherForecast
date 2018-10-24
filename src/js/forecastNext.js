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
};
export default forecastNext;