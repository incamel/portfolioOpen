const body = document.body;
const nav = document.querySelector("nav");

// 햄버거 메뉴
const hamBurger = document.querySelector(".hamburger");
const menu = document.querySelector(".list");
const closeBtn = document.querySelector(".list_close");
// 햄버거 아이콘 클릭
hamBurger.addEventListener("click", function (event) {
  event.stopPropagation();
  menu.classList.add("active");
  nav.classList.add("blur");
  document.documentElement.style.overflowY = "hidden";
});
menu.addEventListener("transitionend", function () {
  if (!menu.classList.contains("active")) {
    document.documentElement.style.overflowY = "visible";
  }
});

// 닫기 버튼 클릭
closeBtn.addEventListener("click", function () {
  // 메뉴에서 'active' 클래스를 제거
  menu.classList.remove("active");
  nav.classList.remove("blur");
  // document.body.style.overflowY = "auto";
});

menu.addEventListener("click", function (event) {
  event.stopPropagation(); // 내부 클릭 이벤트 겹침 방지
});

body.addEventListener("click", function () {
  // 바깥공간을 클릭시 'active' 클래스를 제거
  menu.classList.remove("active");
  nav.classList.remove("blur");
  // document.body.style.overflowY = "auto";
});

// 모바일 2뎁스 메뉴
const men = document.querySelector("#men");
const women = document.querySelector("#women");
const kids = document.querySelector("#kids");

const menuDep = document.querySelector(".dep");

const menDep = document.querySelector("#men .dep");
const womenDep = document.querySelector("#women .dep");
const kidsDep = document.querySelector("#kids .dep");

men.addEventListener("click", function () {
  menDep.classList.toggle("active");
  men.classList.toggle("active");
  womenDep.classList.remove("active");
  kidsDep.classList.remove("active");
});
women.addEventListener("click", function () {
  womenDep.classList.toggle("active");
  women.classList.toggle("active");
  menDep.classList.remove("active");
  kidsDep.classList.remove("active");
});
kids.addEventListener("click", function () {
  kidsDep.classList.toggle("active");
  kids.classList.toggle("active");
  menDep.classList.remove("active");
  womenDep.classList.remove("active");
});

// FNB 아코디언 메뉴
const helpAdd = document.querySelector(".help");
const aboutAdd = document.querySelector(".about");

helpAdd.addEventListener("click", function () {
  helpAdd.classList.toggle("active");
  aboutAdd.classList.remove("active");
});

aboutAdd.addEventListener("click", function () {
  aboutAdd.classList.toggle("active");
  helpAdd.classList.remove("active");
});
