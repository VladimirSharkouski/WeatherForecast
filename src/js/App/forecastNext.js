let forecastNext = (data) => {
    //console.log(city);
     for (let i=1; i<=5; i++) {
         let thsDayMs = data.list[i*8-1].dt*1000,
             thsDay = new Date(thsDayMs),
             year = thsDay.getFullYear(),
             month = thsDay.getMonth()+1,
             weekDay = thsDay.getDate(),
             day = thsDay.getDay(),
             hour = thsDay.getHours()+2,
             toggleRus = document.getElementById("toggle-rus");
         day = day%7;
            if (day === 1) {
                 day = (toggleRus.checked)?"Понедельник":"Monday";
             } else if (day === 2) {
                 day = (toggleRus.checked)?"Вторник":"Tuesday";
             } else if(day === 3) {
                 day = (toggleRus.checked)?"Среда":"Wednesday";
             } else if(day === 4) {
                 day = (toggleRus.checked)?"Четверг":"Thursday";
             } else if(day === 5) {
                 day = (toggleRus.checked)?"Пятница":"Friday";
             } else if(day === 6) {
                 day = (toggleRus.checked)?"Суббота":"Saturday";
             } else {
                 day = (toggleRus.checked)?"Воскресенье":"Sunday";
             };
        let images = data.list[i*8-1].weather[0].main,
            src;
        if(images === "Clear") {
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
export default forecastNext;