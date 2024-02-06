$(function () {
  $("#fullpage").fullpage({
    anchors: ["section1", "section2", "section3", "section4"],
    menu: ".gnb",
    scrollingSpeed: 800,
    navigation: true,
    navigationPosition: "right",
    sectionsColor: ["black", "black", "black", "black"],

    afterLoad: function (origin, destination, direction) {
      let bubble = document.querySelector(".bubble");
      let bubbleThank = document.querySelector(".bubble_thx");
      let bubbleInfo = document.querySelector(".bubble_info");
      let bubbleWelcome = document.querySelector(".bubble_welcome"); //
      let helper = document.querySelector(".helper");
      let projectContainer = document.querySelector(".project_container");
      const titleTxt = document.querySelector(".title_txt h3");
      const titleTxtH3child1 = document.querySelector(
        ".title_txt h3 span:nth-child(1)"
      );
      const titleTxtH3child2 = document.querySelector(
        ".title_txt h3 span:nth-child(3)"
      );
      const titleTxtP = document.querySelector(".title_txt p");

      if (titleTxt && destination.anchor === "section1") {
        titleTxtH3child1.classList.add("show");
        titleTxtH3child2.classList.add("show");
        titleTxtP.classList.add("show");
        // titleTxt.classList.add('show');
        for (let i = 1; i <= 8; i++) {
          let bubbleTitle = document.querySelector(`.bubble_title${i}`);
          if (bubbleTitle) {
            bubbleTitle.classList.add("active");
          }
        }
      }

      if (bubble && destination.anchor === "section2") {
        bubble.style.opacity = 1;
        bubbleWelcome.style.opacity = 1;
      }
      if (bubbleThank && destination.anchor === "section4") {
        bubbleThank.style.opacity = 1;
      }
      if (bubbleInfo && destination.anchor === "section3") {
        bubbleInfo.style.opacity = 1;
      }
      if (projectContainer && destination.anchor === "section3") {
        projectContainer.style.opacity = 1;
      }
      //helper가 모바일 환경에서는 3번째 섹션부터 등장
      if (isMobile()) {
        if (
          destination.anchor === "section3" ||
          destination.anchor === "section4"
        ) {
          if (helper) {
            helper.style.opacity = 1;
          }
        } else {
          if (helper) {
            helper.style.opacity = 0;
          }
        }
      } else {
        if (destination.anchor === "section1") {
          if (helper) {
            helper.style.opacity = 0;
          }
        }
        if (destination.anchor === "section2") {
          if (helper) {
            helper.style.opacity = 1;
          }
        }
        if (destination.anchor === "section3") {
          if (helper) {
            helper.style.opacity = 1;
          }
        }
        if (destination.anchor === "section4") {
          if (helper) {
            helper.style.opacity = 1;
          }
        }
      }
    },
    onLeave: function (origin, destination, direction) {
      // 이전 섹션을 떠날 때 .bubble 클래스를 가진 요소의 opacity를 0으로 변경
      let bubble = origin.item.querySelector(".bubble");
      let bubbleThank = document.querySelector(".bubble_thx");
      let bubbleInfo = document.querySelector(".bubble_info");
      let bubbleWelcome = document.querySelector(".bubble_welcome"); //
      let helper = document.querySelector(".helper");
      let projectContainer = document.querySelector(".project_container");

      if (bubble) {
        bubble.style.opacity = 0;
        projectContainer.style.opacity = 0;
      }
      if (projectContainer) {
        projectContainer.style.opacity = 0;
      }
      if (bubbleThank) {
        bubbleThank.style.opacity = 0;
      }
      if (bubbleInfo) {
        bubbleInfo.style.opacity = 0;
      }
      if (bubbleWelcome) {
        bubbleWelcome.style.opacity = 0;
      }
    },
  });
  function isMobile() {
    return window.innerWidth <= 767;
  }
});

/* 상세 페이지 */
document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".gnb");
  const projectItems = document.querySelectorAll(".project_item");
  const iframeContainer = document.querySelector("#iframe_container");
  const closeBtn = document.querySelector(".close_btn");

  const subIframes = document.querySelectorAll("#iframe_container iframe"); //////////////

  projectItems.forEach(function (projectItem, index) {
    projectItem.addEventListener("click", function (event) {
      // 아이프레임 컨테이너 활성화
      iframeContainer.classList.add("active");
      header.style.opacity = "0";
      // console.log("클릭한 프로젝트 인덱스:", index);

      // 모든 아이프레임을 숨김 ////////////////////////////////////
      subIframes.forEach(function (iframe) {
        iframe.style.display = "none";
      });

      // 클릭한 아이프레임만 보이도록 함  //////////////////////////
      subIframes[index].style.display = "block";

      setTimeout(function () {
        header.style.display = "none";
      }, 500);
    });
  });

  closeBtn.addEventListener("click", function () {
    // 아이프레임 컨테이너 비활성화
    iframeContainer.classList.remove("active");

    // 모든 아이프레임을 숨김 ///////////////////////
    subIframes.forEach(function (iframe) {
      // iframe.style.display = "none";
    }); ///////////////////////////////////////////

    setTimeout(function () {
      header.style.display = "flex";
      setTimeout(function () {
        header.style.opacity = "1";
      }, 50);
    }, 50);

    // console.log("닫기버튼 눌렸어용");
  });
});
