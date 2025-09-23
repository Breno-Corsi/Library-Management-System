function validateNextButton1() {
    const inputUsername = document.getElementById('input-username').value;

    if (validateBlankInput('input-username') == false) {
        return false;
    }
    if (inputUsername.length < 6) {
        alert('Username should be at least 6 characters long!');
        return false;
    }
    validateUsername(inputUsername);
    if (validateUsername(inputUsername) == false) {
        alert("Please input valid username!");
        return false;
    }
    openModal('/modals/register-user/register-user-2.html')
}

function validateNextButton2() {
    const passwordInput1 = document.getElementById('password-input-1');
    const passwordInput2 = document.getElementById('password-input-2');
    if (validateBlankInput('password-input-1') == false || validateBlankInput('password-input-2') == false) {
        return false;
    }
    if (passwordInput1.value.length < 6 || passwordInput2.value.length < 6) {
        alert("Password should be at least 6 characters long!");
        return false;
    }
    if ((passwordInput1 != false) && (passwordInput2 != false)) {
        if(passwordInput1.value != passwordInput2.value) {
            alert("Both password inputs must be the same!");
            return false;
        }
        openModal('/modals/register-user/register-user-3.html')
    }
}

function validateNextButton3() {
    const inputPhoneNumber = document.getElementById('phone-number-input');
    const inputCPF = document.getElementById('cpf-input');
    const inputEmail = document.getElementById('email-input');
    const inputFullName = document.getElementById('full-name-input');
    const inputBirthDate = document.getElementById('birth-date-input');

    if ((
        validateBlankInput('full-name-input') != false &&
        validateBlankInput('cpf-input') != false &&
        validateBlankInput('sex-input') != false &&
        validateBlankInput('phone-number-input') != false &&
        validateBlankInput('birth-date-input') != false &&
        validateBlankInput('email-input') != false
    )) {
        if (inputPhoneNumber.value.length != 15) {
            alert("Please input valid phone number!");
            return false;
        }
        if (inputCPF.value.length != 14) {
            alert("Please input valid CPF number!");
            return false;
        }
        if (validateRegex(inputEmail.value, /\S+@\S+\.\S+/) == false) {
            alert("Please input valid email!");
            return false;
        }
        if (inputFullName.value.length < 3) {
            alert("Please input valid full name!");
            return false;
        }
        
        let birthDate = new Date(inputBirthDate.value);
        const tenYearsAgo = new Date();
        tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);
        if (birthDate > tenYearsAgo) {
            alert("Please input valid birth date!");
            return false;
        }

        clearModal();
    }
}

function validateUsername(username) {
    return /[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){4,18}[a-zA-Z0-9]/.test(username);
}

function togglePasswordVisibility() {
    const elementId = ['password-input-1', 'password-input-2'];

    elementId.forEach((e) => {
        var x = document.getElementById(e);
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    });
    document.getElementById("toggle-visibility-1").classList.toggle("active");
    document.getElementById("toggle-visibility-2").classList.toggle("active");
}