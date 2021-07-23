'use strict';

// project-click hidden
const Shin = document.querySelector(".project_Shin");
const Lee = document.querySelector(".project_Lee");
const Choi = document.querySelector(".project_Choi");


// 7/22 수정
function clickName(event) {
  const target = event.target.className;
  const name = document.querySelector(`.${target}`).innerHTML;
  const project_Shin = document.getElementById("project_Shin");
  const project_Lee = document.getElementById("project_Lee");
  const project_Choi = document.getElementById("project_Choi");
  if (name === "신찬우") {

    $("#project_Shin").show();
    $("#project_Lee").hide();
    $("#project_Choi").hide();
  } else if (name === "이세준") {

    $("#project_Lee").show();
    $("#project_Shin").hide();
    $("#project_Choi").hide();
  } else if (name === "최혜린") {

    $("#project_Shin").hide();
    $("#project_Lee").hide();
    $("#project_Choi").show();
  }

  AOS.refresh();
}


Shin.addEventListener("click", clickName);
Lee.addEventListener("click", clickName);
Choi.addEventListener("click", clickName);

// nameList click color change & motion to list 
const nameList = document.querySelectorAll(".sec2__nameList li");


function handleClick(event) {
  for (let i = 0; i < nameList.length; i++) {
    if (event.target.classList[1] !== "clicked") {
      event.target.classList.add("clicked");
    }
    nameList[i].classList.remove("clicked");
  }
  event.target.classList.add("clicked");
}

function init() {
  for (let i = 0; i < nameList.length; i++) {
    nameList[i].addEventListener("click", handleClick);
  }
}

init();

// 7/22 추가
const Sec2_header = document.querySelector(".Sec2_header");
const sec2__nameList = document.querySelector(".sec2__nameList");
function moving(){
  window.scrollTo({top :  Sec2_header.offsetTop-383.4});

}
function moving2(){
  window.scrollTo({top :  sec2__nameList.offsetTop-500});
}
//택 1
Sec2_header.addEventListener("click", moving)

Sec2_header.addEventListener("click", moving2)

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
  for (let i = 0; i < chat__clock.length; i++) {
    const element = chat__clock[i];
    const date = new Date();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    let hour_12 = "오전";
    if (hours >= 12) {
      hours = hours - 12;
      hour_12 = "오후";
    }
    element.innerText = `${hour_12} ${hours}:${minutes}`;
  }
}

getClock();