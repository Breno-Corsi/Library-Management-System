

function loginValidation() {
    const loginMail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    if (loginMail == "admin@admin.com" && loginPassword == "123123") {
        console.log("Login successful!");
        // https://stackoverflow.com/questions/442384/jumping-to-a-new-html-page-with-javascript
        window.location.pathname = "Library-Management-System/home.html";
        
        return false;
    }
    alert("Unable to complete login!");
    document.getElementById("login-email").value = '';
    document.getElementById("login-password").value = '';
}