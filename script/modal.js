const deleteModal = document.getElementById("deletion-box");
const createModal1 = document.getElementById("creation-box-1");
const createModal2 = document.getElementById("creation-box-2");
const createModal3 = document.getElementById("creation-box-3");

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

function changeModal(currentElementId, displayStyle) {
    let currentModal = document.getElementById(currentElementId);
    currentModal.style.display = displayStyle;
}