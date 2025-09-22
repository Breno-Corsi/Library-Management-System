function continueRegisterBookButton() {
    const registerBookISBNInput = document.getElementById('register-book-isbn-input').value;

    if ((
        validateBlankInput('register-book-title-input') != false &&
        validateBlankInput('register-book-author-input') != false &&
        validateBlankInput('register-book-genre-input') != false &&
        validateBlankInput('register-book-isbn-input') != false &&
        validateBlankInput('register-book-synopsys-input') != false
    )) {
        if (registerBookISBNInput.length != 13) {
            alert("ISBN must contain 13 characters!");
            return false;
        }
        clearModal();
    }
}