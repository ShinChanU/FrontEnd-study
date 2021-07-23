const header = document.querySelector(".todayTime");
const date = new Date();
const match = document.querySelector(".matchPlan");

header.innerText = `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;

