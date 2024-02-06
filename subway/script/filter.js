// 메뉴 필터

const allFilterBtns = document.querySelectorAll('.filter_btn');
const allFilterItems = document.querySelectorAll('.filter');
window.addEventListener('DOMContentLoaded', function() {
    allFilterBtns[0].classList.add('active'); // 페이지 처음 진입시에 btns 0번째 active 넣기
});

allFilterBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        showContent(btn);
    });
});

function showContent(btn){
    allFilterItems.forEach(function(item) {
        if(item.classList.contains(btn.id)){
            resetActiveBtn(); // 단순 엑티브 효과를 위한 없어도 필터기능은 잘 작동함
            btn.classList.add('active');
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

function resetActiveBtn(){
    allFilterBtns.forEach(function(btn) {
        btn.classList.remove('active');
    });
}