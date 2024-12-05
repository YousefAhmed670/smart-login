var signupName = document.getElementById("signupname");
var signupEmail = document.getElementById("signupemail");
var signupPass = document.getElementById("signupPass");
var signUpBtn = document.getElementById("signUp");
var existText = document.getElementById("exist");
var signupList = JSON.parse(localStorage.getItem("signupList")) || [];

signUpBtn.addEventListener("click", function () {
  if (signupName.value == "" || signupEmail.value == "" || signupPass == "") {
    existText.innerHTML = `<p class="text-danger fs-5 py-3">All inputs is required</p>`;
  } else {
    var emailExists = false;
    for (var i = 0; i < signupList.length; i += 1) {
      if (
        signupList[i].signEmail.toLowerCase() ===
        signupEmail.value.toLowerCase()
      ) {
        emailExists = true;
      }
    }
    if (emailExists == false) {
      var signup = {
        signName: signupName.value,
        signEmail: signupEmail.value,
        signPass: signupPass.value,
      };
      signupList.push(signup);
      localStorage.setItem("signupList", JSON.stringify(signupList));
      existText.innerHTML = `<p class="text-success fs-5 py-3">Signup successfully</p>`;
    } else {
      existText.innerHTML = `<p class="text-danger fs-5 py-3">Email already exists</p>`;
    }
  }
});
