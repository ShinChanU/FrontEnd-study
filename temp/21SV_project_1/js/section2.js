'use strict';

// project-click hidden
const Shin = document.querySelector(".project_Shin");
const Lee = document.querySelector(".project_Lee");
const Choi = document.querySelector(".project_Choi");
const HIDDEN_CLASSNAME = "hidden";

function clickName(event) {
  const target = event.target.className;
  const name = document.querySelector(`.${target}`).innerHTML;
  const project_Shin = document.getElementById("project_Shin");
  const project_Lee = document.getElementById("project_Lee");
  const project_Choi = document.getElementById("project_Choi");

  if (name === "신찬우") {
    project_Shin.classList.remove(HIDDEN_CLASSNAME);
    project_Lee.classList.add(HIDDEN_CLASSNAME);
    project_Choi.classList.add(HIDDEN_CLASSNAME);
  } else if (name === "이세준") {
    project_Shin.classList.add(HIDDEN_CLASSNAME);
    project_Lee.classList.remove(HIDDEN_CLASSNAME);
    project_Choi.classList.add(HIDDEN_CLASSNAME);
  } else if (name === "최혜린") {
    project_Shin.classList.add(HIDDEN_CLASSNAME);
    project_Lee.classList.add(HIDDEN_CLASSNAME);
    project_Choi.classList.remove(HIDDEN_CLASSNAME);
  }
}

Shin.addEventListener("click", clickName);
Lee.addEventListener("click", clickName);
Choi.addEventListener("click", clickName);

// nameList click color change & motion to list 
const nameList = document.querySelectorAll(".sec2__nameList li");
// var div2 = document.querySelectorAll(".sec2__nameList li");


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
const sec2 = document.querySelector(".sec_2");

sec2.addEventListener("click", () => window.scrollTo({ top: sec2.offsetTop, behavior: 'smooth' }));

// chatting clock
function getClock() {
  const chatDate = document.querySelector(".chatDate");
  const kor_day = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const dates = date.getDate();
  const day = kor_day[date.getDay()];
  chatDate.innerText = `${year}년 ${month}월 ${dates}일 ${day}`;
}

getClock();