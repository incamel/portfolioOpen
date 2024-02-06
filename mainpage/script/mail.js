emailjs.init("Ih4c3B9TE70BauEfE");

const gnb = document.querySelector(".gnb");
const emailForm = document.getElementById("sendemail");
const successMessage = document.getElementById("successmessage");
const errorMessage = document.getElementById("errormessage");

const overlay = document.getElementById("overlay");
const myModal = document.getElementById("successmessage");

function SendMail(event) {
  event.preventDefault();

  var params = {
    to_name: "라인엽",
    from_name: document.getElementById("sendname").value,
    message: document.getElementById("sendmessage").value,
    email_id: document.getElementById("email_id").value,
  };

  emailjs
    .send("service_1tzaj38", "template_4l8qxqb", params)
    .then(function (res) {
      if (res.status === 200) {
        showSuccessMessage();
      } else {
        showErrorMessage();
      }
    })
    .catch(function (error) {
      showErrorMessage();
    });
}

function showSuccessMessage() {
  successMessage.style.display = "block";
  overlay.style.display = "block";
  gnb.style.opacity = "0.2";
  document.body.addEventListener("scroll", preventScroll);
  document.body.addEventListener("touchmove", preventScroll);
  document.body.addEventListener("mousewheel", preventScroll);
}

function showErrorMessage() {
  errorMessage.style.display = "block";
  overlay.style.display = "block";
  gnb.style.opacity = "1";
  document.body.addEventListener("scroll", preventScroll);
  document.body.addEventListener("touchmove", preventScroll);
  document.body.addEventListener("mousewheel", preventScroll);
}

// 모달 닫기
function closeModal() {
  document.getElementById("successmessage").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  gnb.style.opacity = "1";
}
function preventScroll(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
}
emailForm.addEventListener("submit", SendMail);
