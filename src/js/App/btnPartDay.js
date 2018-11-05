let partDayRus = ["Утро","День","Вечер","Ночь"],
    chooseTime = new Date(),
    timeDay = document.getElementById("timePeriod"),
    hourTime = chooseTime.getHours(),
    toggleRus = document.getElementById("toggle-rus"),
    toggleEng = document.getElementById("toggle-eng");
let btnPartDay = () =>{
    let partDay = partDayRus; 
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
    divNow.className = "time-Day-choose";
    let btnNow = "Сейчас";
    divNow.innerHTML = btnNow;
    timeDay.insertBefore(divNow, timeDay.children[0]);
}

export default btnPartDay;