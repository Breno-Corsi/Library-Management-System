document.addEventListener("DOMContentLoaded", () => {
    const scripts = document.querySelectorAll("script[data-file]");

    scripts.forEach(script => {
        const file = script.getAttribute("data-file");

        if (file) {
            fetch(file)
                .then(response => response.text())
                .then(html => {
                    script.insertAdjacentHTML("afterend", html);
                    script.remove();
                })
        }
    });
});

function openModal(file) {
  clearModal();
  const existing = document.querySelector(".modal-background");
  if (existing) existing.remove();

  fetch(file)
    .then(res => res.text())
    .then(html => {
      document.body.insertAdjacentHTML("afterend", html);
      initModal();
    })
}

function initModal() {
  const modal = document.querySelector(".modal-background");

  modal.style.display = "block";
}

function clearModal() {
  const modal = document.querySelector(".modal-background");
  modal.remove();
}

function validateBlankInput(elementID) {
    let inputValue = document.getElementById(elementID).value;
    if (inputValue == "") {
        alert(elementID + " cannot be empty");
        return false;
    }
}

function validateRegex(input, regex) {
    return regex.test(input);
}