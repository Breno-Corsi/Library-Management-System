function continueRegisterAuthorButton() {
    if ((
        validateBlankInput('modal-register-author-name-input') != false &&
        validateBlankInput('modal-register-author-country-input') != false &&
        validateBlankInput('modal-register-author-sex-input') != false &&
        validateBlankInput('modal-register-author-biography-input') != false
    )) {
        clearModal();
    }
}