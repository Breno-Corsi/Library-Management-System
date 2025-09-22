const genreIdInput = document.getElementById('modal-register-genre-id-input');
document.getElementById('modal-register-genre-id-input').addEventListener("keyup", (event) => {
    validateGenre(genreIdInput.value);
})

function validateGenre(genre) {
    genre = genre.toUpperCase();
    genre = genre.replace(/[^A-Z]/g,"");
    genreIdInput.value = genre;
}

function continueRegisterGenreButton() {
    if ((
        validateBlankInput('modal-register-genre-name-input') != false &&
        validateBlankInput('modal-register-genre-id-input') != false &&
        validateBlankInput('modal-register-genre-description-input') != false
    )) {
        clearModal();  
    }
}