import forecastMain from "./forecastMain.js";
import forecastNext from "./forecastNext.js";
import appStartApp from "./appStartApp.js";
//let city;
let btnCity = document.getElementById("button-city");
let cityFunc = () =>{
    let cities = document.getElementsByName("city");
    for (let i=0; i<cities.length; i++) {
        if (cities[i].selected == true) {
            let city = cities[i].value;
            cityValue.innerText = city;
            let now = 0;
            getWeather(city);
        }      
    }
}
btnCity.addEventListener("click", cityFunc);
let getWeather = () => {
    let urlWeather = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric,by&APPID=ddbd161541d1f7b82b0b6eeaea3698b6";
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
export default getWeather;