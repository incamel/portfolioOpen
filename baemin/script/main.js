// 페이지 모두 불러온 후 동작
document.addEventListener("DOMContentLoaded", function () {
  clickHamburger();
  toggleActive();
  swiperSetting();
});

// 햄버거 버튼 클릭
function clickHamburger() {
  depMenu = document.querySelector(".dep");
  hamBurger = document.querySelector(".hamburger");

  hamBurger.addEventListener("click", function (e) {
    e.preventDefault(); //a태그 기본동작 막기
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      depMenu.style.right = "0"; // active
      document.body.style.overflowY = "hidden";
      document.body.style.overflowX = "hidden";
    } else {
      depMenu.style.right = "-100%";
      document.body.style.overflowY = "auto"; // 수평 스크롤 복구
      document.body.style.overflowX = "hidden"; // 수직 스크롤 막기
    }
  });
}
//gsap 애니메이션
document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  // 함수를 사용하여 공통적인 애니메이션 코드를 작성
  const createAnimation = (selector, xValue, startValue, endValue) => {
    gsap.from(selector, {
      x: xValue,
      duration: 1,
      stagger: 0.5,
      scrollTrigger: {
        trigger: selector,
        start: startValue,
        end: endValue,
        // markers: true,
        scrub: true,
      },
    });
  };

  ScrollTrigger.matchMedia({
    "(min-width: 800px)": function () {
      createAnimation(".left_img", "-100%", "top 80%", "bottom 20%");
      createAnimation(".right_img", "100%", "top 80%", "bottom 20%");
    },
    "(max-width: 799px)": function () {
      createAnimation(".left_img", "-50%", "top 80%", "bottom 30%");
      createAnimation(".right_img", "50%", "top 70%", "bottom 10%");
    },
    all: function () {},
  });
});

//푸터 페밀리 사이트 토글
function toggleActive() {
  linkBox = document.querySelector(".link");
  linkList = document.querySelector(".link_list");
  arrow = document.querySelector(".arrow");

  linkBox.addEventListener("click", function () {
    linkList.classList.toggle("active");
    arrow.classList.toggle("active");
  });
}
