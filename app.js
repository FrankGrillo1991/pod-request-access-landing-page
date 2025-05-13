const email = document.getElementById("email").value;
const emailError = document.getElementById("email-error");
const successMessage = document.getElementById("success-message");
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function validateEmail() {

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

