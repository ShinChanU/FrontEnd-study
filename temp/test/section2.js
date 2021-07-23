// 버튼 클릭시 화면 변경
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

// 버튼 클릭시 이름 색깔 변경
const sec2__nameList = document.querySelectorAll(".sec2__nameList li");

function handleClick(event) {

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
  } else {
    for (var i = 0; i < sec2__nameList.length; i++) {
      sec2__nameList[i].classList.remove("clicked");
    }

    event.target.classList.add("clicked");
  }
}

function init() {
  for (var i = 0; i < sec2__nameList.length; i++) {
    sec2__nameList[i].addEventListener("click", handleClick);
  }
}

init();

const secIntro = document.querySelector(".secIntro");
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const intro = document.querySelector(".Intro");
const Sec_1 = document.querySelector(".Sec_1");
const Sec_2 = document.querySelector(".Sec_2");

secIntro.addEventListener("click", () => window.scrollTo({ top: intro.offsetTop, behavior: 'smooth' }));
section1.addEventListener("click", () => window.scrollTo({ top: Sec_1.offsetTop, behavior: 'smooth' }));
section2.addEventListener("click", () => window.scrollTo({ top: Sec_2.offsetTop, behavior: 'smooth' }));

function upnav() {
  document.addEventListener('scroll', onScroll, { passive: true });
  let last = 0;
  const gap = 1;
  const Top_Menu = document.querySelector(".Top_Menu");

  function onScroll() {
    const scrollposition = pageYOffset;
    if (Math.abs(last - scrollposition) <= gap) return;
    else if (scrollposition > last) {
      Top_Menu.classList.remove("downdown");
    } else if (scrollposition < last) {
      Top_Menu.classList.add("downdown");
    }
    last = scrollposition;
  }
}

upnav();