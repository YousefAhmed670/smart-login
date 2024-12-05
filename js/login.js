var loginBtn = document.getElementById("loginBtn");
var signinEmail = document.getElementById("signinemail");
var signinPass = document.getElementById("signinpass");
var loginText = document.getElementById("loginText");
var signupList = JSON.parse(localStorage.getItem("signupList")) || [];

loginBtn.addEventListener("click", function () {
  if (signinEmail.value == "" || signinPass.value == "") {
    loginText.innerHTML = `<p class="text-danger fs-5 py-3">All inputs is required<</p>`;
  } else {
    for (var i = 0; i < signupList.length; i += 1) {
      if (
        signupList[i].signEmail.toLowerCase() ==
          signinEmail.value.toLowerCase() &&
        signupList[i].signPass == signinPass.value
      ) {
        localStorage.setItem("name", signupList[i].signName);
        window.location.href = "home.html";
      } else {
        loginText.innerHTML = `<p class="text-danger fs-5 py-3">Invalid email or password</p>`;
      }
    }
  }
});
