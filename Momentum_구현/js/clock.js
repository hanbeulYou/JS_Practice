const clock = document.querySelector('h2#clock')

function getClock(){
    // new Date()로 현재 시간 가져오기
    const date = new Date();
    // String으로 number -> string 
    // padStart로 string에 padding 넣어주기(길이, 넣을 내용)
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock()
// 실행할 함수, 시간(ms)
setInterval(getClock, 1000);