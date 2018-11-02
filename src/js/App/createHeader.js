let header = document.querySelector(".header");
let createHeader = () => {
    //название приложения
    let divHeaderName = document.createElement("div");
        divHeaderName.className = "app-name";
        divHeaderName.innerHTML = "Прогноз погоды городов Беларуси";
        header.appendChild(divHeaderName);
    // дата 
    let divHeaderDate = document.createElement("div");
        divHeaderDate.className = "date";
        header.appendChild(divHeaderDate);
    let nowDate =() => {
        let time = new Date(),
            year = time.getFullYear(),
            month = time.getMonth()+1,
            day = time.getDate();
        document.getElementsByClassName("date")[0].innerText = day+"/"+month+"/"+year;
    };
    nowDate();
};
export default createHeader;