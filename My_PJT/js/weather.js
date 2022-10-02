const WEATHER_API = globalVariable.WEATHER_API;

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector(".weather__now");
            let nowWeather = ''
            // img 파일로 다 변경하기
            if(data.weather[0].main=='Rain'){
                nowWeather = '🌧';
            }
            weather.innerText = nowWeather;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

// 앞에 arg는 잘 실행됐을때, 뒤에는 안됐을 때
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);