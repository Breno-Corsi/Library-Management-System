fetch("/pages/shared.html")
  .then(response => response.text())
  .then(data => {
  document.head.innerHTML += data;
})