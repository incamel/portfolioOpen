// 페이지 모두 불러온 후 동작
document.addEventListener("DOMContentLoaded", function () {
  productsSwiperSetting();
  launchingSwiperSetting();
});

let ww = window.innerWidth;
let mySwiper;

function featuredSwiperSetting() {
  // 1280 width값 이하에서만 스와이퍼 동작
  if (ww < 1280 && mySwiper === undefined) {
    mySwiper = new Swiper(".featured_swiper", {
      slidesPerView: "1",
      simulateTouch: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    });
  } else if (ww >= 1280 && mySwiper !== undefined) {
    mySwiper.destroy();
    mySwiper = undefined;
  }
}

window.addEventListener("load", featuredSwiperSetting);
window.addEventListener("resize", function () {
  ww = window.innerWidth;
  featuredSwiperSetting();
});

function productsSwiperSetting() {
  var swiper = new Swiper(".products_swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      // 버튼 사용자 지정
      nextEl: "#products_next",
      prevEl: "#products_prev",
    },
    loop: true,
    breakpoints: {
        
        320: {
          slidesPerView: 1.2,
        },
        768: {
            slidesPerView: "auto",
        },
        1024: {
            slidesPerView: "auto",
        },
      },
  });
}

function launchingSwiperSetting() {
  var swiper = new Swiper(".launching_swiper", {
    slidesPerView: "auto",
    spaceBetween: 16,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      // 버튼 사용자 지정
      nextEl: "#launching_next",
      prevEl: "#launching_prev",
    },
    loop: true,
    breakpoints: {
        
          320: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: "auto",
          },
          1024: {
            slidesPerView: "auto",
          },
        },
  });
}



