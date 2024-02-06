// 풀페이지.js
$(function () {
  $("#fullpage").fullpage({
    anchors: ["section1", "section2", "section3", "section4", "section5"], // 앵커 클릭 이동
    scrollingSpeed: 800, //스크롤 속도
    normalScrollElements: "#map", //지도에서 스크롤 안먹게
  });
});

hoverMemu();
toggleAnimation();

// 토글 애니메이션
function toggleAnimation() {
  const button = document.querySelector(".lang");
  const rote = document.querySelector(".lang_rote");
  const langList = document.querySelector(".lang_list");

  button.addEventListener("click", function () {
    rote.classList.toggle("active");
    if (langList) {
      if (langList.style.display === "block") {
        langList.style.display = "none";
      } else {
        langList.style.display = "block";
      }
    }
  });
}

// Hover 메뉴
function hoverMemu() {
  const dropbg = document.querySelector(".h_inner");
  const gnb = document.querySelector(".gnb");
  const dep1 = document.querySelectorAll(".dep1 > li");
  const dep2 = document.querySelectorAll(".dep2");
  const dep_h = document.querySelectorAll(".dep_h > a");
  const lang = document.querySelector(".lang");
  const logoColor = document.querySelector(".logo_color");
  const logoWhite = document.querySelector(".logo_white");

  dep1.forEach((dep1) => {
    dep1.addEventListener("mouseenter", function () {
      dropbg.classList.add("h_active");
      dep2.forEach((dep2) => {
        dep2.style.opacity = "1";
        dep2.style.visibility = "visible";
      });
      dep_h.forEach(function (dep_h) {
        dep_h.style.color = "black";
      });
      lang.style.color = "black";
      logoColor.style.display = "block";
      logoWhite.style.display = "none";
    });
  });
  dropbg.addEventListener("mouseleave", function () {
    dropbg.classList.remove("h_active");
    dep2.forEach((dep2) => {
      dep2.style.opacity = "0";
      dep2.style.visibility = "hidden";
    });
    dep_h.forEach(function (dep_h) {
      dep_h.style.color = "#ffffff";
    });
    lang.style.color = "#ffffff";
    logoColor.style.display = "none";
    logoWhite.style.display = "block";
  });
}

//Products 스와이퍼
var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000, // 5초마다 슬라이드 전환
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});
//MediaRoom 스와이퍼
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: "auto",
  slidesPerGroup: 1,
  spaceBetween: 40,
  slidesOffsetBefore: 60,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".mediaroom_button_next",
    prevEl: ".mediaroom_button_prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

//카카오 맵 api
var container = document.getElementById("map");
var options = {
  center: new kakao.maps.LatLng(37.5735032, 127.0295852),
  // draggable: false, //확대축소 막기
  level: 3,
};
var map = new kakao.maps.Map(container, options);
//마커생성
var markerPosition = new kakao.maps.LatLng(37.5735032, 127.0295852);
var marker = new kakao.maps.Marker({
  position: markerPosition,
});
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
marker.setMap(map);
