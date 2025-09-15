const toggleBtn = document.getElementById("toggle-visibility");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
});

function loginValidation() {
  const loginMail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  if (loginMail == "admin@mail.com" && loginPassword == "1234") {
    window.location.pathname = "/pages/authors/authors.html";
    return false;
  }
  alert("Unable to complete login!");
  document.getElementById("login-email").value = '';
  document.getElementById("login-password").value = '';
}

function togglePasswordVisibility(elementId) {
  var x = document.getElementById("login-password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}