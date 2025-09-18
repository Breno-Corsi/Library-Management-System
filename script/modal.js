const allModalID = [
    "deletion-box",
    "creation-confirmation-box",
    "modal-logout-box",
    "modal-create-account-1",
    "modal-create-account-2",
    "modal-create-account-3",
    "modal-register-book-box",
    "modal-register-author-box",
    "modal-register-genre-box",
    "modal-self-information"
]

const dropZone = document.getElementById("modal-recieve-image");
const inputUsername = document.getElementById('input-username');
const inputEmail = document.getElementById('email-input');
const inputCPF = document.getElementById('cpf-input');
const inputFullName = document.getElementById('full-name-input');
const inputPhoneNumber = document.getElementById('phone-number-input');
const inputBirthDate = document.getElementById('birth-date-input');

function clearModal() {
    allModalID.forEach(element => {
        let currentModal = document.getElementById(element);
        currentModal.style.display = "none";
    });
}

function changeModal(currentElementId, displayStyle) {
    clearModal();
    let currentModal = document.getElementById(currentElementId);
    currentModal.style.display = displayStyle;
}

function logOut() {
    window.location.pathname = "index.html";
}

function validateNextButton1() {
    if (validateBlankInput('input-username') == false) {
        return false;
    }
    if (validateRegex(inputUsername.value, /[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]/) == false) {
        alert("Please input valid username!");
        return false;
    }
    changeModal('modal-create-account-2', 'flex');
}

function validateNextButton2() {
    if ((validateBlankInput('password-input-1') != false) && (validateBlankInput('password-input-2') != false)) {
        if(document.getElementById('password-input-1').value != document.getElementById('password-input-2').value) {
            alert("Both password inputs must be the same!");
            return false;
        }
        changeModal('modal-create-account-3', 'flex');
    }
}

inputCPF.addEventListener("keyup", (event) => {
    validateCPF(inputCPF.value);
})

inputPhoneNumber.addEventListener("keyup", (event) => {
    validatePhoneNumber(inputPhoneNumber.value);
})

function validateNextButton3() {
    if ((
        validateBlankInput('full-name-input') != false &&
        validateBlankInput('cpf-input') != false &&
        validateBlankInput('sex-input') != false &&
        validateBlankInput('phone-number-input') != false &&
        validateBlankInput('birth-date-input') != false &&
        validateBlankInput('email-input') != false
    )) {
        changeModal('creation-confirmation-box', 'flex');
    }
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
}

function validateBlankInput(elementID) {
    let inputValue = document.getElementById(elementID).value;
    if (inputValue == "") {
        alert(elementID + " cannot be empty");
        return false;
    }
}

function validateCPF(cpf) {
    cpf = cpf.replace(/\D/g,"");
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/,"$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2");
    inputCPF.value = cpf;
}

function validatePhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\D/g,"");
    phoneNumber = phoneNumber.replace(/(\d{0})(\d)/,"$1($2");
    phoneNumber = phoneNumber.replace(/(\d{2})(\d)/,"$1) $2");
    phoneNumber = phoneNumber.replace(/(\d{5})(\d)/,"$1-$2");
    inputPhoneNumber.value = phoneNumber;
}

function validateRegex(input, regex) {
    return regex.test(input);
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
    })

    document.getElementById("toggle-visibility-1").classList.toggle("active");
    document.getElementById("toggle-visibility-2").classList.toggle("active");
}

const ISBNInput = document.getElementById('register-book-isbn-input');
document.getElementById('register-book-isbn-input').addEventListener("keyup", (event) => {
    validateISBN(ISBNInput.value);
})

function validateISBN(isbn) {
    isbn = isbn.replace(/\D/g,"");
    ISBNInput.value = isbn;
}

function continueRegisterBookButton() {
    const registerBookISBNInput = document.getElementById('register-book-isbn-input').value;

    if ((
        validateBlankInput('register-book-title-input') != false &&
        validateBlankInput('register-book-author-input') != false &&
        validateBlankInput('register-book-genre-input') != false &&
        validateBlankInput('register-book-isbn-input') != false &&
        validateBlankInput('register-book-synopsys-input') != false
    )) {
        if (registerBookISBNInput.length != 13) {
            alert("ISBN must contain 13 characters!");
            return false;
        }
        changeModal('creation-confirmation-box', 'flex');
    }
}

function continueRegisterAuthorButton() {
    if ((
        validateBlankInput('modal-register-author-name-input') != false &&
        validateBlankInput('modal-register-author-country-input') != false &&
        validateBlankInput('modal-register-author-sex-input') != false &&
        validateBlankInput('modal-register-author-biography-input') != false
    )) {
        changeModal('creation-confirmation-box', 'flex');
    }
}

const genreIdInput = document.getElementById('modal-register-genre-id-input');
document.getElementById('modal-register-genre-id-input').addEventListener("keyup", (event) => {
    validateGenre(genreIdInput.value);
})

function validateGenre(genre) {
    genre = genre.toUpperCase();
    genre = genre.replace(/[^A-Z]/g,"");
    genreIdInput.value = genre;
}

function continueRegisterGenreButton() {
    if ((
        validateBlankInput('modal-register-genre-name-input') != false &&
        validateBlankInput('modal-register-genre-id-input') != false &&
        validateBlankInput('modal-register-genre-description-input') != false
    )) {
        changeModal('creation-confirmation-box', 'flex');   
    }
}

dropZone.addEventListener("dragover", e => e.preventDefault());

dropZone.addEventListener("drop", e => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = ev => {
      dropZone.innerHTML = `<img class="create-account-drop-image" src="${ev.target.result}">`;
    };
    reader.readAsDataURL(file);
  }
});

let registerBookDropZone = document.getElementById("register-book-image-input");
registerBookDropZone.addEventListener("dragover", e => e.preventDefault());

registerBookDropZone.addEventListener("drop", e => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = ev => {
      registerBookDropZone.innerHTML = `<img class="register-book-drop-image" src="${ev.target.result}">`;
    };
    reader.readAsDataURL(file);
  }
});

let registerAuthorDropZone = document.getElementById('modal-register-author-image-input');
registerAuthorDropZone.addEventListener("dragover", e => e.preventDefault());

registerAuthorDropZone.addEventListener("drop", e => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith("image/")) {
    const reader = new FileReader();
    reader.onload = ev => {
      registerAuthorDropZone.innerHTML = `<img class="modal-register-author-image-dropzone" src="${ev.target.result}">`;
    };
    reader.readAsDataURL(file);
  }
});