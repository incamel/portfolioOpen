// index.html 스와이퍼
var swiper = new Swiper(".mainswiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

//sub_touse.html 스와이퍼
var text = ["STEP", "1", "STEP", "2", "STEP", "3", "STEP", "4", "STEP", "5"];

var swiper = new Swiper(".orderswiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 700,
  pagination: {
    el: ".order_pagination",
    bulletClass: "custom_bullet",
    bulletActiveClass: "active",
    clickable: true,
    // text배열 두개씩 가져옴
    renderBullet: function (index, className) {
      var pair = text.slice(index * 2, index * 2 + 2);
      return (
        '<div class="' +
        className +
        '"><span>' +
        pair.join("</span><span>") +
        "</span></div>"
      );
    },
  },
  navigation: {
    nextEl: ".orderswiper_next",
    prevEl: ".orderswiper_prev",
  },
  on: {
    slideChange: function () {
      // 모든 step 박스의 active 클래스 제거
      document.querySelectorAll(".slide_txt > div").forEach(function (step) {
        step.classList.remove("active");
      });
      // 현재 활성화된 슬라이드에 해당하는 step 박스에 active 클래스 추가
      document
        .querySelectorAll(".step")
        [this.realIndex].classList.add("active");

      //페이지 네이션
      var self = this;

      // 현재 활성화된 슬라이드의 custom_bullet 박스에 active 클래스 추가
      document
        .querySelectorAll(".custom_bullet")
        .forEach(function (bullet, bulletIndex) {
          bullet.classList.remove("active");
          if (bulletIndex <= self.realIndex) {
            bullet.classList.add("active");
          }
        });
    },
  },
});

//sub_event.html 스와이퍼
var swiper = new Swiper(".eventswiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  // autoplay: {
  // // delay: 2500,
  // // disableOnInteraction: false
  // },
  speed: 700,
  pagination: {
    el: ".order_pagination",
    bulletClass: "custom_bullet",
    bulletActiveClass: "active",
    clickable: true,
    // bulletActiveClass: "order_pagination_bullet_active",
  },
  navigation: {
    nextEl: ".orderswiper_next",
    prevEl: ".orderswiper_prev",
  },
});
