'use strict';

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";


function onLoginSubmit(event) {
  event.preventDefault(); // 기본 행동이 발동하지않도록 막아줌(새로고침)
  loginForm.classList.add(HIDDEN_CLASSNAME); // css 추가
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`; // 위와 같은 코드
  greeting.classList.remove(HIDDEN_CLASSNAME); // css 제거
}

loginForm.addEventListener("submit", onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY); // username이 없으면 null을 return

if(savedUsername === null) { 
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  //show the greeting
  paintGreeting(savedUsername);
}