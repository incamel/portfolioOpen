// 공통 헤더 드롭다운 메뉴

const mainMenu = document.querySelectorAll(".main_menu");
const subText = document.querySelectorAll(".sub_menu");
const header = document.querySelector("#header");

mainMenu.forEach(function (mainMenu) {
  mainMenu.addEventListener("mouseenter", function () {
    header.style.height = "250px";
    subText.forEach(function (subText) {
      subText.classList.add("active");
    });
  });
});
header.addEventListener("mouseleave", function () {
  header.style.height = "70px";
  subText.forEach(function (subText) {
    subText.classList.remove("active");
  });
});

// 이미지 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".m_visual").classList.add("active");
});

// 텍스트 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  const visualTxt = document.querySelector(".visual_txt");
  visualTxt.style.transform = "translate(-50%,75%)";
});


// sub_menu_snackwrap.html
// sub_menu_salad.html
// 이미지 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".visual_wrap_img").classList.add("active");
  document.querySelector(".visual_wrap_img2").classList.add("active");
});




// sub_touse.html
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
