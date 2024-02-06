function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

//   window.onload = function () {
//     // 모바일 디바이스인 경우
//     if (isMobile()) { 
//       window.location.href = "https://inyeob.com/m/subway/index.html";
//     } else {
//       // 데스크톱 디바이스인 경우
//       window.location.href = "https://www.inyeob.com/subway/index.html";
//     }
//   };

  window.onload = function () {
    // 모바일 디바이스인 경우
    if (isMobile()) { 
      window.location.href = "https://inyeob.com/m/subway/index.html";
    } 
  };