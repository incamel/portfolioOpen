// 공통 햄버거 메뉴
const mobileHamburger = document.querySelector(".h_btn");
const mobileMenu = document.querySelector(".mobile_menu");
const closeButton = document.querySelector(".btn_close");
const body = document.body;

mobileHamburger.addEventListener("click", function () {
  mobileMenu.style.transform = "translateX(0vw)";
  body.classList.add("scroll-block"); //메뉴 열릴 시 스크롤 막기
});

closeButton.addEventListener("click", function () {
  mobileMenu.style.transform = "translateX(100vw)";
  body.classList.remove("scroll-block");
});

// 매장주문 / 주문TIP 탭 버튼
const orderBtn = document.querySelector("#order_btn");
const tipBtn = document.querySelector("#tip_btn");
const order = document.querySelector("#tab_order");
const tip = document.querySelector("#tab_tip");

tipBtn.addEventListener("click", function () {
  tipBtn.classList.add("active");
  orderBtn.classList.remove("active");
  order.style.display = "none";
  tip.style.display = "block";
});

document.addEventListener("DOMContentLoaded", function () {
  orderBtn.classList.add("active");
});

orderBtn.addEventListener("click", function () {
  orderBtn.classList.add("active");
  tipBtn.classList.remove("active");
  order.classList.add("active");
  tip.style.display = "none";
  order.style.display = "block";
});
