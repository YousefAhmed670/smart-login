var signupName = document.getElementById("signupname");
var signupEmail = document.getElementById("signupemail");
var signupPass = document.getElementById("signupPass");
var signUpBtn = document.getElementById("signUp");
var existText = document.getElementById("exist");
var nameRegex = /^[A-Za-z\s]{2,50}$/;
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var passwordRegex = /^[A-Za-z\d@$!%*?&]{6,}$/;
var signupList = JSON.parse(localStorage.getItem("signupList")) || [];

signUpBtn.addEventListener("click", function () {
  if (signupName.value == "" || signupEmail.value == "" || signupPass == "") {
    existText.innerHTML = `<p class="text-danger fs-5 py-3">All inputs is required</p>`;
  } else {
    if (validateAll() == true) {
      var emailExists = false;
      for (var i = 0; i < signupList.length; i += 1) {
        if (
          signupList[i].signEmail.toLowerCase() ===
          signupEmail.value.toLowerCase()
        ) {
          emailExists = true;
        }else{
          emailExists = false
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
  }
  clearForm();
});
function clearForm() {
  signupName.value = null;
  signupEmail.value = null;
  signupPass.value = null;
}
function validate(regex, input, inputValue, alert) {
  if (regex.test(inputValue) == true) {
    alert.classList.add("d-none");
    input.classList.replace("is-invalid", "is-valid");
    return true;
  } else {
    alert.classList.remove("d-none");
    input.classList.add("is-invalid");
    return false;
  }
}
function validateAll() {
  if (
    validate(/^[A-Za-z\s]{2,50}$/, signupName, signupName.value, NameAlert) &&
    validate(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      signupEmail,
      signupEmail.value,
      emailAlert
    ) &&
    validate(/^[A-Za-z\d@$!%*?&]{6,}$/, signupPass, signupPass.value, passAlert)
  ) {
    return true;
  } else {
    return false;
  }
}
