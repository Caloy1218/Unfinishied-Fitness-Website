// //------Contact Form--------

// let JcfitForm = document.querySelector("#JcFitDevForm");
// let fullName = document.querySelector("#fullName");
// let email = document.querySelector("#email");
// let msg = document.querySelector("#Msg");
// let submit = document.querySelector("#submit");
// let error = documen.querySelector("#error");
// submit.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (
//     fullName.value.length === 0 ||
//     email.value.length === 0 ||
//     msg.value.length === 0
//   ) {
//     console.log(false);
//     error.innerHTML = "<h4 class=error>Please complete the Details!</h4>";
//     setTimeout(() => document.querySelector(".error").remove(), 3000);
//   } else {
//     msg.innerHTML = "<h4 class=msg1>Thank you for accesing my Website!</h4>";
//     setTimeout(() => document.querySelector(".msg1").remove(), 3000);
//   }
//   JcfitForm.submit();
// });

function darkMode() {
  document.querySelector(".homepage").style.background = "#1b1c1e";
  document.querySelector(".form-container").style.background = "#1b1c1e";
  document.querySelector(".contact-container").style.background = "#1b1c1e";
  document.querySelector(".form-container").style.color = "white";
}
function lightMode() {
  document.querySelector(".homepage").style.background = "white";
  document.querySelector(".form-container").style.background = "white";
  document.querySelector(".contact-container").style.background = "white";
  document.querySelector(".form-container").style.color = "#1b1c1e";
}
