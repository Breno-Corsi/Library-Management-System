document.addEventListener("DOMContentLoaded", () => {
  const scripts = document.querySelectorAll("script[data-file]");

  scripts.forEach(script => {
    const file = script.getAttribute("data-file");

    if (file) {
      fetch(file)
        .then(response => response.text())
        .then(html => {
          script.insertAdjacentHTML("beforebegin", html);
          script.remove();
        })
    }
  });
});