const deleteModal = document.getElementById("deletion-box");
const createModal = document.getElementById("creation-box-1");
const createModal2 = document.getElementById("creation-box-2");

deleteModal.onclick = function(event) {
    if (event.target == deleteModal) {
        changeModal("deletion-box", "none");
    }
}
createModal.onclick = function(event) {
    if (event.target == createModal) {
        changeModal("creation-box-1", "none");
    }
}
createModal2.onclick = function(event) {
    if (event.target == createModal2) {
        changeModal("creation-box-2", "none");
    }
}

function changeModal(currentElementId, displayStyle) {
    let currentModal = document.getElementById(currentElementId);
    currentModal.style.display = displayStyle;
}