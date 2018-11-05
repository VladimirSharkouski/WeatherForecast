let lang = "rus",
    windSpeedId = document.getElementById("windSpeedId"),
    windSpeedMs = document.getElementById("speed"),
    derectionId = document.getElementById("windDerectionId"),
    windDerection = document.getElementById("getDerection"),
    pressureId = document.getElementById("pressureId"),
    humidityId = document.getElementById("humidityId"),
    pressValId = document.getElementById("pressureValue"),
    btnClassDay = document.getElementsByClassName("time-Day"),
    divClassDays = document.getElementsByClassName("classDay"),
    cityName = document.getElementsByClassName("city"),
    timeDay = document.getElementById("timePeriod"),
    cityChooseName = document.getElementsByName("city");

let changeLang = (e) => {
    if (e.target.id === "toggle-eng") {
        //перевод рус-англ
        lang = "eng";
        document.querySelector(".app-name").innerHTML = "Weather Forecast for Belarus";
        document.querySelector(".city-menu-text").innerHTML = "Choose city:";
        document.getElementById("button-city").innerHTML = "Get Forecast";
        if (cityName[0].innerText === "Минск") {
            cityName[0].innerText = "Minsk"
        }   else if (cityName[0].innerText === "Брест") {
            cityName[0].innerText = "Brest"
        }   else if (cityName[0].innerText === "Витебск") {
            cityName[0].innerText = "Vitebsk"
        }   else if (cityName[0].innerText === "Гомель") {
            cityName[0].innerText = "Homel"
        }   else if (cityName[0].innerText === "Гродно") {
            cityName[0].innerText = "Hrodna"
        }   else if (cityName[0].innerText === "Могилев") {
            cityName[0].innerText = "Mahilyow"
        }
        windSpeedId.innerText = "Wind Speed";
        windSpeedMs.innerText = "m/s";
        derectionId.innerText = "Wind derection";
        if (windDerection.innerText === "С") {
            windDerection.innerText = "N"
        } else if (windDerection.innerText === "С-В") {
            windDerection.innerText = "N-E"
        } else if (windDerection.innerText === "В") {
            windDerection.innerText = "E"
        } else if (windDerection.innerText === "Ю-В") {
            windDerection.innerText = "S-E"
        } else if (windDerection.innerText === "Ю") {
            windDerection.innerText = "S"
        } else if (windDerection.innerText === "Ю-З") {
            windDerection.innerText = "S-W"
        } else if (windDerection.innerText === "З") {
            windDerection.innerText = "W"
        } else if (windDerection.innerText === "С-З") {
            windDerection.innerText = "N-W"
        }
        humidityId.innerText = "Humidity";
        pressureId.innerText = "Pressure atmosphere";
        pressValId.innerText = "mm Hg";
        
        
        for (let i=0; i<timeDay.children.length; i++) {
            if (timeDay.children[i].innerText === "Сейчас") {
                timeDay.children[i].innerText = "Now";   
            } else if (timeDay.children[i].innerText === "Утро") {
                timeDay.children[i].innerText = "Morning";   
            } else if (timeDay.children[i].innerText === "День") {
                timeDay.children[i].innerText = "Day";   
            } else if (timeDay.children[i].innerText === "Вечер") {
                timeDay.children[i].innerText = "Evening";   
            } else if (timeDay.children[i].innerText === "Ночь") {
                timeDay.children[i].innerText = "Night"}
        };
        for (let i=0; i<divClassDays.length; i++) {
            if (divClassDays[i].innerText === "Понедельник") {
                divClassDays[i].innerText = "Monday";   
            } else if (divClassDays[i].innerText === "Вторник") {
                divClassDays[i].innerText = "Tuesday";   
            } else if (divClassDays[i].innerText === "Среда") {
                divClassDays[i].innerText = "Wednesday";   
            } else if (divClassDays[i].innerText === "Четверг") {
                divClassDays[i].innerText = "Thursday";   
            } else if (divClassDays[i].innerText === "Пятница") {
                divClassDays[i].innerText = "Friday";   
            } else if (divClassDays[i].innerText === "Суббота") {
                divClassDays[i].innerText = "Saturday";   
            } else if (divClassDays[i].innerText === "Воскресенье") {
                divClassDays[i].innerText = "Sunday";   
            }
        }
        for (let i=0; i<cityChooseName.length; i++) {
            if (cityChooseName[i].innerText === "Минск") {
                cityChooseName[i].innerText = "Minsk";
            } else if (cityChooseName[i].innerText === "Брест") {
                cityChooseName[i].innerText = "Brest";
            } else if (cityChooseName[i].innerText === "Витебск") {
                cityChooseName[i].innerText = "Vitebsk";
            } else if (cityChooseName[i].innerText === "Гомель") {
                cityChooseName[i].innerText = "Homel";
            } else if (cityChooseName[i].innerText === "Гродно") {
                cityChooseName[i].innerText = "Hrodna";
            } else if (cityChooseName[i].innerText === "Могилёв") {
                cityChooseName[i].innerText = "Mahilyow";
            }
        }
        
    //перевод англ-рус        
    } else if (e.target.id === "toggle-rus") {
        lang = "rus";
        document.querySelector(".app-name").innerHTML = "Прогноз погоды городов Беларуси";
        document.querySelector(".city-menu-text").innerHTML = "Выберите город:";
        document.getElementById("button-city").innerHTML = "Получить прогноз";
        if (cityName[0].innerText === "Minsk") {
            cityName[0].innerText = "Минск"
        }   else if (cityName[0].innerText === "Brest") {
            cityName[0].innerText = "Брест"
        }   else if (cityName[0].innerText === "Vitebsk") {
            cityName[0].innerText = "Витебск"
        }   else if (cityName[0].innerText === "Homel") {
            cityName[0].innerText = "Гомель"
        }   else if (cityName[0].innerText === "Hrodna") {
            cityName[0].innerText = "Гродно"
        }   else if (cityName[0].innerText === "Mahilyow") {
            cityName[0].innerText = "Могилев"
        }
        windSpeedId.innerText = "Скорость ветра";
        windSpeedMs.innerText = "м/c";
        derectionId.innerText = "Направление ветра";
        if (windDerection.innerText === "N") {
            windDerection.innerText = "С"
        } else if (windDerection.innerText === "N-E") {
            windDerection.innerText = "С-В"
        } else if (windDerection.innerText === "E") {
            windDerection.innerText = "В"
        } else if (windDerection.innerText === "S-E") {
            windDerection.innerText = "Ю-В"
        } else if (windDerection.innerText === "S") {
            windDerection.innerText = "Ю"
        } else if (windDerection.innerText === "S-W") {
            windDerection.innerText = "Ю-З"
        } else if (windDerection.innerText === "W") {
            windDerection.innerText = "З"
        } else if (windDerection.innerText === "N-W") {
            windDerection.innerText = "С-З"
        }
        humidityId.innerText = "Влажность";
        pressureId.innerText = "Атмосферное давление ";
        pressValId.innerText = "мм.рт.ст.";
        //время суток
        for (let i=0; i<timeDay.children.length; i++) {
            if (timeDay.children[i].innerText === "Now") {
            timeDay.children[i].innerText = "Сейчас";   
            } else if (timeDay.children[i].innerText === "Morning") {
            timeDay.children[i].innerText = "Утро";   
            } else if (timeDay.children[i].innerText === "Day") {
            timeDay.children[i].innerText = "День";   
            } else if (timeDay.children[i].innerText === "Evening") {
            timeDay.children[i].innerText = "Вечер";   
            } else if (timeDay.children[i].innerText === "Night") {
            timeDay.children[i].innerText = "Ночь"}
        }
        //дни недели
        for (let i=0; i<divClassDays.length; i++) {
            if (divClassDays[i].innerText === "Monday") {
            divClassDays[i].innerText = "Понедельник";   
            } else if (divClassDays[i].innerText === "Tuesday") {
            divClassDays[i].innerText = "Вторник";   
            } else if (divClassDays[i].innerText === "Wednesday") {
            divClassDays[i].innerText = "Среда";   
            } else if (divClassDays[i].innerText === "Thursday") {
            divClassDays[i].innerText = "Четверг";   
            } else if (divClassDays[i].innerText === "Friday") {
            divClassDays[i].innerText = "Пятница";   
            } else if (divClassDays[i].innerText === "Saturday") {
            divClassDays[i].innerText = "Суббота";   
            } else if (divClassDays[i].innerText === "Sunday") {
            divClassDays[i].innerText = "Воскресенье";   
            } 
        }
        for (let i=0; i<cityChooseName.length; i++) {
            if (cityChooseName[i].innerText === "Minsk") {
                cityChooseName[i].innerText = "Минск"
            } else if (cityChooseName[i].innerText === "Brest") {
                cityChooseName[i].innerText = "Брест"
            } else if (cityChooseName[i].innerText === "Vitebsk") {
                cityChooseName[i].innerText = "Витебск"
            } else if (cityChooseName[i].innerText === "Homel") {
                cityChooseName[i].innerText = "Гомель"
            } else if (cityChooseName[i].innerText === "Hrodna") {
                cityChooseName[i].innerText = "Гродно"
            } else if (cityChooseName[i].innerText === "Mahilyow") {
                cityChooseName[i].innerText = "Могилёв"
            }; 
        }
    }
    console.log(e)
}
let langToggle = document.getElementById("langApp");
langToggle.addEventListener("change", changeLang);
export default changeLang;