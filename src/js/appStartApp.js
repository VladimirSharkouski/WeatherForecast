
let weatherValue = document.getElementById("show-weater-value"),
    pictureValue = weatherValue.querySelector(".picture"),
    now = 0,
    city = "Минск",
    cityValue = weatherValue.querySelector(".city"),
    page = document.getElementById("app"),
    timeDay = document.getElementById("timePeriod"),
    partDay = ["Утро","День","Вечер","Ночь"],
    chooseTime = new Date(),
    hourTime = chooseTime.getHours();

let appStartApp = () =>{   
    let nowDate =() => {
        let time = new Date(),
            year = time.getFullYear(),
            month = time.getMonth()+1,
            day = time.getDate();
        //console.log (now)
        document.getElementsByClassName("date")[0].innerText = day+"/"+month+"/"+year;
    };
    nowDate();
    let btnPartDay = () =>{
        let choosePartDay = () => {
            let partDay1 = partDay.shift();
            partDay.push(partDay1)
        };
        
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
            let divTime = document.createElement("div");
            divTime.id = "time"+i;
            divTime.className = "time-Day";
            divTime.innerHTML = partDay[i];
            timeDay.appendChild(divTime);
        }
        let divNow = document.createElement("div");
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

};
export default appStartApp;