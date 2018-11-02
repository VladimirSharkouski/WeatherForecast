let weatherValue = document.getElementById("show-weater-value"),
    city = "Минск",
    lang = "rus",
    page = document.getElementById("app"),
    langToggle = document.getElementById("lang"),
    windSpeedId = document.getElementById("windSpeedId"),
    windSpeedMs = document.getElementById("speed"),
    DerectionId = document.getElementById("windDerectionId"),
    HumidityId = document.getElementById("humidityId"),
    PressureId = document.getElementById("pressureId"),
    PressValId = document.getElementById("pressureValue"),
    cityValue = weatherValue.querySelector(".city");


let createMainBlock = () => {
    //заполнение главного экрана шаблонным текстом
    windSpeedId.innerText = "Скорость ветра";
    windSpeedMs.innerText = "м/c";
    DerectionId.innerText = "Направление ветра";
    HumidityId.innerText = "Влажность";
    PressureId.innerText = "Атмосферное давление ";
    PressValId.innerText = "мм.рт.ст.";
    cityValue.innerText = city;
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
}
export default createMainBlock;