const form = document.querySelector("form");
const email = document.querySelector("input");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
    const emailValue = email.value.trim();
    error.style.visibility = "visible";
    if (emailValue === "") {
        error.style.color = "#fb3e3e";
        error.innerHTML = "Oops! Please add your email";
    } else if (!isEmail(emailValue)) {
        error.style.color = "#fb3e33";
        error.innerHTML = "Oops! Please check your email";
    } else {
        error.style.color = "#54e6af";
        error.innerHTML = "Thank you! We'll get back to you soon!";
        form.reset();
    }
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}