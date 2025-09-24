document.addEventListener("DOMContentLoaded", () => {
  fetch("/fake-database/authors.json")
    .then(response => response.json())
    .then(database => {
      let placeholder = document.querySelector("#data-output");
      let out = "";
      for (let item of database) {
        out += `
          <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.country}</td>
            <td>${item.notable_work}</td>
			<td>
                <div>
                    <button class="actions-buttons" id="info-button">
                        <img src="/assets/icons/info_36dp_000_FILL0_wght400_GRAD0_opsz40.svg">
                    </button>
                    <button class="actions-buttons">
                        <img src="/assets/icons/edit_square_36dp_000_FILL0_wght400_GRAD0_opsz40.svg">
                    </button>
                    <button class="actions-buttons" onclick="changeModal('deletion-box', 'flex')">
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
