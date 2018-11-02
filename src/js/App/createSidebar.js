let sidebar = document.querySelector(".city-menu"),
    selectCities = ["Минск","Брест","Витебск","Гомель","Гродно","Могилёв"];
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
    //кнопка подтверждения 
    let sidebarSelectBtn = document.createElement("button");
        sidebarSelectBtn.id = "button-city";
        sidebarSelectBtn.innerHTML = "Получить прогноз";
        sidebar.appendChild(sidebarSelectBtn);
}
export default createSidebar;