import changeLang from "./language.js";
import btnPartDay from "./btnPartDay.js";
import getWeather from "./getWeather.js";
import getWeather2 from "./chooseBtn.js";
let now,
    city = "Минск",
    weatherValue = document.getElementById("show-weater-value"),
    cityValue = weatherValue.querySelector(".city");

let AppFunc = () => {
    btnPartDay();
    getWeather(city);
}
export default AppFunc;