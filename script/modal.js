var modal = document.getElementById("deletion-box");
var closeBtn = document.getElementById("delete-button");

closeBtn.onclick = function() {
    changeModal("flex");
}

modal.onclick = function(event) {
  if (event.target == modal) {
    changeModal("none");
  }
}

function changeModal(displayStyle) {
    modal.style.display = displayStyle;
}