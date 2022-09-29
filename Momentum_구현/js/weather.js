const API_KEY = globalVariable.API_KEY;

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            city.innerText = data.name;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.")
}

// 앞에 arg는 잘 실행됐을때, 뒤에는 안됐을 때
navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);