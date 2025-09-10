const registerButtonElementsId = [
    "button-register-new-user",
    "button-register-new-book",
    "button-register-new-author",
    "button-register-new-genre"
];

const menuButtonsElementsId = [
    "menu-button-users",
    "menu-button-books",
    "menu-button-authors",
    "menu-button-genres"
]

let elementId;
function changeClassElement(createButtonElementId, classActive, classInactive) {
    if (registerButtonElementsId.includes(createButtonElementId)) {
        elementId = registerButtonElementsId;
    }
    if (menuButtonsElementsId.includes(createButtonElementId)) {
        elementId = menuButtonsElementsId;
    }
    elementId.forEach((e) => {
        document.getElementById(e).classList.remove(classActive);
        document.getElementById(e).classList.add(classInactive);
    });
    document.getElementById(createButtonElementId).classList.remove(classInactive);
    document.getElementById(createButtonElementId).classList.add(classActive);
}

changeClassElement('button-register-new-user', 'active', 'inactive');
changeClassElement('menu-button-users', 'menu-buttons-active', 'menu-buttons');