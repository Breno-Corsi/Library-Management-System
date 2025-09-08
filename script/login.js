const toggleBtn = document.getElementById("toggle-visibility");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
});

function togglePasswordVisibility() {
  var x = document.getElementById("login-password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function loginValidation() {
    const loginMail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    if (loginMail == "admin@mail.com" && loginPassword == "1234") {
        // https://stackoverflow.com/questions/442384/jumping-to-a-new-html-page-with-javascript
        window.location.pathname = "home.html";
        
        return false;
    }
    alert("Unable to complete login!");
    document.getElementById("login-email").value = '';
    document.getElementById("login-password").value = '';
}