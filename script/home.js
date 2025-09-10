const createButtonElementsId = [
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

function changeCreateButton(createButtonElementId) {
    createButtonElementsId.forEach((e) => {
        document.getElementById(e).classList.remove("active");
        document.getElementById(e).classList.add("inactive");
    });
    document.getElementById(createButtonElementId).classList.add("active");
    document.getElementById(createButtonElementId).classList.remove("inactive");
}

changeCreateButton("button-register-new-user");

function changeFocus(buttonElementId) {
    menuButtonsElementsId.forEach((e) => {
        document.getElementById(e).style.backgroundColor = "#333333";
    })

    document.getElementById(buttonElementId).style.backgroundColor = "#617AF4";
}
changeFocus('menu-button-users');