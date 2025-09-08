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
        console.log(element);
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