import appStartApp from "./appStartApp.js";
import getWeather from "./getWeather.js";
import getWeather2 from "./dayTime.js";
import forecastMain from "./forecastMain.js";
import forecastNext from "./forecastNext.js";
let appFunc = () => {
    appStartApp();
    getWeather();
    //forecastMain();
    //forecastNext();

};
export default appFunc;