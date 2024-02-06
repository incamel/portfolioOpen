function swiperSetting() {
  const swiper = new Swiper(".swiper-container", {
    spaceBetween: 30,
    autoplay: {
      //자동슬라이드
      delay: 4000, // 시간 설정
      disableOnInteraction: false, //스와이프 후 자동 재생 유무
    },
    // loop : true,
    loopAdditionalSlides: 1,
    breakpoints: {
      280: {
        //280px 이상의 크기에서 옵션 값
        slidesPerView: 1,
        slidesOffsetBefore: 0,
      },
      768: {
        //768px 이상의 크기에서 옵션 값
        slidesPerView: 2.5,
      },
      1024: {
        //1024px 이상의 크기에서 옵션 값
        // slidesPerView: 5.5,
        slidesPerView: 3,
      },
    },
  });
}
