let buildApp = () => {
    let weatherValue = document.getElementById("show-weater-value"),
        header = document.querySelector(".header"),
        selectCities = ["Минск","Брест","Витебск","Гомель","Гродно","Могилёв"],
        sidebar = document.querySelector(".city-menu"),
        optionCities = document.getElementById("select-city"),
        windSpeedId = document.getElementById("windSpeedId"),
        windSpeedMs = document.getElementById("speed"),
        DerectionId = document.getElementById("windDerectionId"),
        PressureId = document.getElementById("pressureId"),
        HumidityId = document.getElementById("humidityId"),
        PressValId = document.getElementById("pressureValue"),
        temperatureValue = weatherValue.querySelector(".temperature"),
        cityValue = weatherValue.querySelector(".city"),
        windValue = weatherValue.querySelector(".wind-derection"),
        humidityValue = weatherValue.querySelector(".humidity"),
        pressureValue = weatherValue.querySelector(".pressure"),
        accept = document.getElementById("button-city"),
        city = "Минск";


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
    };
    let createSidebar = () => {
        //Пункт выбора города
        let divSidebarChooseCity = document.createElement("div");
        divSidebarChooseCity.className = "city-menu-text";
        divSidebarChooseCity.innerHTML = "Выберите город:";
        sidebar.appendChild(divSidebarChooseCity);
        //Создание списка городов
        let divSidebarSelectCity = document.createElement("select");
        divSidebarSelectCity.id = "select-city";
        sidebar.appendChild(divSidebarSelectCity);
        for (let i = 0; i<selectCities.length; i++) {
            divSidebarSelectCity.innerHTML += "<option name = \"city\">"+selectCities[i]+"</option>";
        }

        let sidebarSelectBtn = document.createElement("button");
        sidebarSelectBtn.id = "button-city";
        sidebarSelectBtn.innerHTML = "Получить прогноз";
        sidebar.appendChild(sidebarSelectBtn);
    }

    let createMainBlock = () => {
        //заполнение главного экрана шаблонным текстом
        windSpeedId.innerText = "Скорость ветра";
        windSpeedMs.innerText = "м/c";
        DerectionId.innerText = "Направление ветра";
        HumidityId.innerText = "Влажность";
        PressureId.innerText = "Атмосферное давление ";
        PressValId.innerText = "мм.рт.ст.";
        cityValue.innerText = city;
    }
    let createApp = () => {
        createHeader();
        createSidebar();
        createMainBlock();
    };
    createApp();
};
export default buildApp;