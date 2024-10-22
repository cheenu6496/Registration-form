// Get form elements
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

// Error spans
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Function to validate name (non-empty)
function validateName() {
    const name = nameField.value.trim();
    if (name === "") {
        nameError.textContent = "please Enter your Name";
        return false;
    } else {
        nameError.textContent = "";
        return true;
    }
}

// Function to validate email (simple regex)
function validateEmail() {
    const email = emailField.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return false;
    } else {
        emailError.textContent = "";
        return true;
    }
}

// Function to validate password (minimum length of 6 characters)
function validatePassword() {
    const password = passwordField.value.trim();
    if (password.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long.";
        return false;
    } else {
        passwordError.textContent = "";
        return true;
    }
}

// Function to check all validations and enable/disable the submit button
function checkFormValidity() {
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    // Enable submit button only if all validations pass
    if (isNameValid && isEmailValid && isPasswordValid) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

// Add event listeners for real-time validation
nameField.addEventListener("input", checkFormValidity);
emailField.addEventListener("input", checkFormValidity);
passwordField.addEventListener("input", checkFormValidity);

// Prevent form submission if validation fails
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    if (!checkFormValidity()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});
