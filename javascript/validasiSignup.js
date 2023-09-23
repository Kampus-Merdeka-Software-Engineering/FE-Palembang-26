// Get form elements and error message elements
const signupForm = document.getElementById('signup-form');
const emailInput = document.getElementById('signup-email');
const passwordInput = document.getElementById('signup-password');
const confirmPasswordInput = document.getElementById('confirm-password');
const usernameInput = document.getElementById('signup-username');
const submitButton = document.getElementById('submit-button');
const errorMessages = document.getElementById('error-messages');

// Function to validate email format
function validateEmail(email) {
    const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailFormat.test(email);
}

// Function to validate password format (at least one capital letter and one number)
function validatePassword(password) {
    const passwordFormat = /^(?=.*[A-Z])(?=.*\d).+$/;
    return passwordFormat.test(password);
}

// Function to check if password and confirm password match
function passwordsMatch(password, confirmPassword) {
    return password === confirmPassword;
}

// Event listener for form submission
signupForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for now

    // Perform validation on form submit
    const emailValid = validateEmail(emailInput.value);
    const passwordValid = validatePassword(passwordInput.value);
    const passwordsMatchValid = passwordsMatch(passwordInput.value, confirmPasswordInput.value);
    const usernameValid = usernameInput.value.trim() !== '';

    // Clear existing error messages
    errorMessages.innerHTML = '';

    // Display error messages
    displayErrorMessage('email', !emailValid, 'Please enter a valid email address.');
    displayErrorMessage('password', !passwordValid, 'Password must contain at least one capital letter and one number.');
    displayErrorMessage('confirm-password', !passwordsMatchValid, 'Passwords do not match.');
    displayErrorMessage('username', !usernameValid, 'Please enter a username.');
});

// Function to display error messages
function displayErrorMessage(field, show, message) {
    if (show) {
        const errorMessageElement = document.createElement('div');
        errorMessageElement.className = 'error-message';
        errorMessageElement.style.color = 'red';
        errorMessageElement.textContent = message;
        errorMessages.appendChild(errorMessageElement);
    }
}

// Get the "Close" button element
const closeButton = document.getElementById('close-popup');

// Event listener for the "Close" button
closeButton.addEventListener('click', function () {
    // Clear all input fields
    emailInput.value = '';
    passwordInput.value = '';
    confirmPasswordInput.value = '';
    usernameInput.value = '';

    // Clear any existing error messages
    errorMessages.innerHTML = '';
});


