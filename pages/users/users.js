document.addEventListener("DOMContentLoaded", () => {
  fetch("/fake-database/users.json")
    .then(response => response.json())
    .then(database => {
      let placeholder = document.querySelector("#data-output");
      let out = "";
      for (let item of database) {
        out += `
          <tr>
            <td>${item.id}</td>
            <td>${item.full_name}</td>
            <td>${item.cpf}</td>
            <td>${item.phone_number}</td>
            <td>${item.birth_date}</td>
            <td>${item.email}</td>
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
