import forecastMain from "./forecastMain.js";
import thisCityChoose from "./city.js";

//функция, которая меняет данные в главном окне в зависимости от выбора города и времени суток
let city,
    now;
let getWeather2 = (city, now) => {
    console.log(city);
        let urlWeather = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric,by&APPID=ddbd161541d1f7b82b0b6eeaea3698b6";
        fetch(urlWeather).then((response) => {
            const promise  = response.json();
            return promise;
        }).then((data) => {
            forecastMain(data, now);
            console.log(data);
            //console.log(now);
        })
    };
export default getWeather2;