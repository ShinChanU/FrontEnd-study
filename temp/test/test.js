'use strict';

// chatting date 
function getDate() {
  const chatDate = document.querySelector(".chatDate");
  const kor_day = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dates = date.getDate();
  const day = kor_day[date.getDay()];
  chatDate.innerText = `${year}년 ${month}월 ${dates}일 ${day}`;
}

getDate();

// chatting clock
function getClock() {
  const chat__clock = document.querySelectorAll(".chat__clock");
  console.dir(chat__clock);
  for (let i = 0; i < chat__clock.length; i++) {
    const element = chat__clock[i];
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    let hour_12 = "오전";
    if (hours >= 12) {
      hours = hours - 12;
      hour_12 = "오후";
    }
    element.innerText = `${hour_12} ${hours}:${minutes}`;
  }
}

getClock();