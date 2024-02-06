const UlList = document.querySelectorAll(".column ul");
const UlWrap = document.querySelectorAll(".listwrap");

UlWrap.forEach(function (wrap, i) {
  wrap.addEventListener("click", function () {
    if (UlList[i].style.height === "100%") {
      UlList[i].style.height = "0";
    } else {
      UlList[i].style.height = "100%";
    }
    wrap.querySelector(".arrow").classList.toggle("active");
    wrap.querySelector(".arrow--l-r").classList.toggle("left");
    wrap.querySelector(".arrow--l-r").classList.toggle("right");
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".colorbtn_wrap", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".phonepack",
    start: "top 50%",
    end: "bottom 70%",
    toggleActions: "play none none reverse",
    pin: ".colorbtn_wrap",
    id: "color_btn",
    // markers: true,
  },
});

gsap.utils.toArray(".wrap_up").forEach((item) => {
  ScrollTrigger.create({
    trigger: item,
    start: "top 80%",
    end: "bottom 20%",
    // markers: true,
    once: true,
    onEnter: () => {
      animate(item);
    },
  });

  item.style.opacity = "0";
});

const animate = (item) => {
  gsap.fromTo(
    item,
    { autoAlpha: 0, y: 30 },
    { autoAlpha: 1, y: 0, duration: 2.5, overwrite: "auto", ease: "expo" }
  );
};

//숫자 카운트
var startCount1 = { var: 0 };

gsap.to(startCount1, {
  var: 26,
  duration: 0.5,
  ease: "power1.inOut",
  delay: 0.2,
  onUpdate: changeNumber1,
  scrollTrigger: {
    trigger: "#number1",
  },
});

function changeNumber1() {
  document.getElementById("number1").innerHTML = startCount1.var.toFixed();
}

var startCount2 = { var: 0 };

gsap.to(startCount2, {
  var: 20,
  duration: 0.5,
  ease: "power1.inOut",
  delay: 0.2,
  onUpdate: changeNumber2,
  scrollTrigger: {
    trigger: "#number2",
  },
});

function changeNumber2() {
  document.getElementById("number2").innerHTML = startCount2.var.toFixed();
}

//Dynamic Island
gsap.to(".vibrating", {
  x: () => Math.random() * 10 - 5, // 좌우로 랜덤하게 이동
  duration: 0.1,
  repeat: 10,
  ease: "none",
  delay: 2.5,
  scrollTrigger: {
    trigger: ".vibrating",
    start: "top 80%",
    end: "bottom 20%",
    toggleActions: "play none none none",
    onEnter: () => gsap.to(".vibrating", { opacity: 1 }),
  },
});

gsap.utils.toArray(".dy_list img").forEach((item, index) => {
  ScrollTrigger.create({
    trigger: item,
    start: "top 80%",
    end: "bottom 0%",
    // markers: true,
    toggleActions: "play none none none",

    once: true,
    onEnter: () => {
      animate2(item);
    },
  });

  item.style.opacity = "0";
});

const animate2 = (item) => {
  gsap.fromTo(
    item,
    { autoAlpha: 0, x: 100, y: 0 },
    {
      autoAlpha: 1,
      x: -45,
      y: 0,
      duration: 2.5,
      overwrite: "auto",
      ease: "expo",
    }
  );
};

gsap.to(".compatibility .default_btn", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".apple_package",
    // start: "top 90%",
    start: () => (window.innerWidth > 767 ? "top 90%" : "-100% 100%"),
    end: "bottom 95%",
    toggleActions: "play reverse play reverse",
    id: "연결성살펴보기",
    // markers: true,
  },
});

gsap.to(".safe .default_btn", {
  opacity: 1,
  scrollTrigger: {
    trigger: ".safe",
    start: "top 60%",
    end: "bottom 90%",
    toggleActions: "play reverse play reverse",
    id: "자세한방법",
    // markers: true,
  },
});

gsap.to(".ing_header", {
  scrollTrigger: {
    trigger: ".main_visual",
    start: "top 0%",
    toggleActions: "play none none reverse",
    // markers: true,
    id: "스크롤진행중헤더",
  },
  y: 0,
});
