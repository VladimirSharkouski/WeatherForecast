import forecastMain from "./forecastMain.js";
import forecastNext from "./forecastNext.js";
//import thisCityChoose from "./city.js";
let city,
    now=0;


let getWeather = (city) => {
    console.log(city);
    let urlWeather = "http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric,by&APPID=ddbd161541d1f7b82b0b6eeaea3698b6";
    fetch(urlWeather).
    then((response) => {
        const promise  = response.json();
        console.log(promise);
        return promise;}).
    then((data) => {
        //console.log(data);
        forecastMain(data,now);
        forecastNext(data);
        //timesOfDay(data)
    })
//    catch (error => {
//    alert(error); 
//  });
};
export default getWeather;