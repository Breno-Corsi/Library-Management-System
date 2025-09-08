// Code for testing porpuses only
const testModal = document.getElementById("modal-register-genre-box");
changeModal("modal-register-genre-box", "flex");
testModal.onclick = function(event) {
    if (event.target == testModal) {
        changeModal("deletion-box", "none");
    }
}
// End


const deleteModal = document.getElementById("deletion-box");
const createModal1 = document.getElementById("creation-box-1");
const createModal2 = document.getElementById("creation-box-2");
const createModal3 = document.getElementById("creation-box-3");
const createModal4 = document.getElementById("creation-confirmation-box");
const createModal5 = document.getElementById("modal-register-author-box");
const createModal6 = document.getElementById("modal-register-genre-box");

deleteModal.onclick = function(event) {
    if (event.target == deleteModal) {
        changeModal("deletion-box", "none");
    }
}
createModal1.onclick = function(event) {
    if (event.target == createModal1) {
        changeModal("creation-box-1", "none");
    }
}
createModal2.onclick = function(event) {
    if (event.target == createModal2) {
        changeModal("creation-box-2", "none");
    }
}
createModal3.onclick = function(event) {
    if (event.target == createModal3) {
        changeModal("creation-box-3", "none");
    }
}
createModal4.onclick = function(event) {
    if (event.target == createModal4) {
        changeModal("creation-confirmation-box", "none");
    }
}
createModal5.onclick = function(event) {
    if (event.target == createModal5) {
        changeModal("modal-register-author-box", "none");
    }
}
createModal6.onclick = function(event) {
    if (event.target == createModal6) {
        changeModal("modal-register-genre-box", "none");
    }
}

function changeModal(currentElementId, displayStyle) {
    let currentModal = document.getElementById(currentElementId);
    currentModal.style.display = displayStyle;
}