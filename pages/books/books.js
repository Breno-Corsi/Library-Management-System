document.addEventListener("DOMContentLoaded", () => {
  fetch("/fake-database/books.json")
    .then(response => response.json())
    .then(database => {
      let placeholder = document.querySelector("#data-output");
      let out = "";
      for (let item of database) {
        out += `
          <tr>
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td>${item.genre}</td>
            <td>${item.isbn}</td>
			<td>
                <div>
                    <button class="actions-buttons">
                        <img src="/assets/icons/info_36dp_000_FILL0_wght400_GRAD0_opsz40.svg">
                    </button>
                    <button class="actions-buttons">
                        <img src="/assets/icons/edit_square_36dp_000_FILL0_wght400_GRAD0_opsz40.svg">
                    </button>
                    <button class="actions-buttons">
                        <img src="/assets/icons/delete_36dp_000_FILL0_wght400_GRAD0_opsz40.svg">
                    </button>
                </div>
            </td>
          </tr>
        `;
      }
      placeholder.innerHTML = out;
    });
});
