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

const inputEmail = document.getElementById('email-input');
const inputFullName = document.getElementById('full-name-input');
const inputPhoneNumber = document.getElementById('phone-number-input');
const inputBirthDate = document.getElementById('birth-date-input');

function clearModal() {
    allModalID.forEach(element => {
        let currentModal = document.getElementById(element);
        currentModal.style.display = "none";
    });
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