var deleteModal = document.getElementById("deletion-box");
var createModal = document.getElementById("creation-box-1")

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

function changeModal(currentElementId, displayStyle) {
    let currentModal = document.getElementById(currentElementId);
    currentModal.style.display = displayStyle;
}