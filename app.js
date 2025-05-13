const form = document.querySelector("form");
const email = document.getElementById("email");
const error = document.getElementById("error");
const successMessage = document.getElementById("success-message");
  
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();
});

function checkInput() {
  const successMessage = document.getElementById("success-message");
    if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address.";
    successMessage.textContent = ""; // clear success
    return false; // prevent form submission
  } else {
    emailError.textContent = "";
    successMessage.textContent = "Email submitted successfully!";
    return false; // just show message, don't reload page
  }
}

