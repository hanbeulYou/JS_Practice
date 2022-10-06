const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')
const myHome = document.querySelector('#my__home')
const myURL = document.querySelector('#my__url')

const HIDDEN_CLASSNAME = 'hidden';
const DONTSHOW_CLASSNAME = 'dontshow';
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    myHome.innerText = `${username}님의 미니홈피`;
    myURL.innerText = `https://ssyworld.com/${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    myHome.classList.remove(DONTSHOW_CLASSNAME);
    myURL.classList.remove(DONTSHOW_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}