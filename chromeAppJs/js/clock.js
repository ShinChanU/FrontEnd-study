'use strict';
// intervals(시간적 주기), timeout

const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval(arg1, arg2): arg1= 실행할 함수이름, arg2= 주기(ms)
// setInterval(sayHello, 5000); 

getClock();
setInterval(getClock, 1000);