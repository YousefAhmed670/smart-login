var userName = document.getElementById("name");
var signupList = JSON.parse(localStorage.getItem("signupList")) || [];
var listName = localStorage.getItem("name");
if (listName) {
  userName.innerHTML = `Welcome ${listName}`;
}
