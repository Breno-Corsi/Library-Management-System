const allModalID = [
    "deletion-box",
    "creation-confirmation-box",
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