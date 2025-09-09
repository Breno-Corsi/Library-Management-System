const allModalID = [
    "deletion-box",
    "creation-confirmation-box",
    "modal-logout-box",
    "modal-create-account-1",
    "modal-create-account-2",
    "modal-create-account-3",
    "modal-register-author-box",
    "modal-register-genre-box"
]

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

const dropZone = document.getElementById("modal-recieve-image");

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

function validateNextButton1() {
    if (validateBlankInput('input-username') != false) {
        changeModal('modal-create-account-2', 'flex');
    }
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

const inputCPF = document.getElementById('cpf-input');
inputCPF.addEventListener("keyup", (event) => {
    validateCPF(inputCPF.value);
})

function validatePhoneNumber(phoneNumber) {
    phoneNumber = phoneNumber.replace(/\D/g,"");
    phoneNumber = phoneNumber.replace(/(\d{0})(\d)/,"$1($2");
    phoneNumber = phoneNumber.replace(/(\d{2})(\d)/,"$1) $2");
    phoneNumber = phoneNumber.replace(/(\d{5})(\d)/,"$1-$2");
    inputPhoneNumber.value = phoneNumber;
}

const inputPhoneNumber = document.getElementById('phone-number-input');
inputPhoneNumber.addEventListener("keyup", (event) => {
    validatePhoneNumber(inputPhoneNumber.value);
})