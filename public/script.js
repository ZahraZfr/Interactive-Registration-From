let userName = document.getElementById("txtUserName");
let email = document.getElementById("txtEmail");
let pwd = document.getElementById("txtPwd");
let conPwd = document.getElementById("txtConPwd");
let form = document.querySelector("form");

function validateInput() {
    // ---------check username is empty
    if (userName.value.trim() === "") {
        onError(userName, "user name cannot be empty")
    } else {
        onSuccess(userName);
    }
    // -----------check email is empty
    if (email.value.trim() === "") {
        onError(email, "email cannot be empty")
    } else { // check email is valid or not
        if (!isValidEmail(email.value.trim())) {
            onError(email, "Email is not valid")
        } else {
            onSuccess(email);
        }

    }
    // ---------check password is empty
    if (pwd.value.trim() === "") {
        onError(pwd, "Password cannot be empty")
    } else {
        onSuccess(pwd);
    }
    // ---------check confirm password is empty 
    if (conPwd.value.trim() === "") {
        onError(conPwd, "confirm Password cannot be empty")
    } else { //check confirm password is equle to password 
        if (pwd.value.trim() !== conPwd.value.trim()) {
            onError(conPwd, "Password & confirm password not matching")
        } else {
            onSuccess(conPwd);
        }

    }
}

document.querySelector("button")
    .addEventListener('click', (event) => {
        // keep the log in console
        event.preventDefault();
        validateInput();
    });

function onSuccess(input) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "hidden";
    messageEle.innerHTML = "";
    parent.classList.remove("error");
    parent.classList.add("success");
}
function onError(input, message) {
    let parent = input.parentElement;
    let messageEle = parent.querySelector("small");
    messageEle.style.visibility = "visible";
    messageEle.innerHTML = message;
    parent.classList.add("error");
    parent.classList.remove("success");
}

function isValidEmail(email) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}