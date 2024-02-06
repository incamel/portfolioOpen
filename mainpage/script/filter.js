const allFilterBtns = document.querySelectorAll(".filter_btn");
const allFilterItems = document.querySelectorAll(".project_item");
window.addEventListener("DOMContentLoaded", function () {
  allFilterBtns[0].classList.add("active"); // 페이지 처음 진입시에 btns 0번째 active 넣기
});

allFilterBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    showContent(btn);
    // 모든 btns에 각각 클릭 이벤트를 넣고  showContent(btn); 실행
  });
});

function showContent(btn) {
  allFilterItems.forEach(function (item) {
    if (item.classList.contains(btn.id)) {
      //현재 반복 중인 item이라는 요소의 클래스 목록에,
      //클릭된 버튼 btn의 id에 해당하는 클래스가 포함되어 있는지를 확인.

      resetActiveBtn(); // 클릭된 버튼 이외의 모든 버튼에서 'active' 클래스를 제거
      btn.classList.add("active");
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function resetActiveBtn() {
  allFilterBtns.forEach(function (btn) {
    btn.classList.remove("active");
  });
}
