// Validasi untuk mencegah SQL Injection

document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email-input");
    const passwordInput = document.getElementById("password-input");
    const loginButton = document.getElementById("login-button");
    const errorMessage = document.getElementById("error-message");
    
    loginButton.addEventListener("click", function (event) {
        // Check if email and password are empty
        if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
            event.preventDefault(); // Prevent the form from submitting
            errorMessage.textContent = "Please fill in both email and password correctly.";
            errorMessage.style.transform = "translateY(-50px)"; // Translate the error message up
        } else {
            // Clear any previous error message
            errorMessage.textContent = "";
            errorMessage.style.transform = "translateY(0)"; // Reset the error message position

            // Here, you can add code to validate the username and password.
            // If they are valid, you can redirect to index.html.
            // For this example, we'll simulate a successful login.
            
            // Check the email format using a regular expression
            const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // Check the password format using a regular expression
            const passwordFormat = /^(?=.*[A-Z])(?=.*\d).+$/;

            if (!emailFormat.test(emailInput.value)) {
                event.preventDefault(); // Prevent the form from submitting
                errorMessage.textContent = "Please enter a valid email address.";
                errorMessage.style.transform = "translateY(-50px)"; // Translate the error message up
            } else if (!passwordFormat.test(passwordInput.value)) {
                event.preventDefault(); // Prevent the form from submitting
                errorMessage.textContent = "Password must contain at least one capital letter and one number.";
                errorMessage.style.transform = "translateY(-50px)"; // Translate the error message up
            } else {
                // CEK APAKAH DATA USER ADA DI DATABASE ATAU TIDAK
                // Clear any previous error message
                errorMessage.textContent = "";
                errorMessage.style.transform = "translateY(0)"; // Reset the error message position

                // Here, you can add code to validate the username and password against your local database.
                const enteredEmail = emailInput.value.trim();
                const enteredPassword = passwordInput.value.trim();

                // Retrieve the stored data from local storage
                const storedData = JSON.parse(localStorage.getItem("formData"));

                if (storedData && storedData.email === enteredEmail && storedData.password === enteredPassword) {
                    // Valid login credentials, redirect to index.html
                    window.location.href = "/index.html";
                } else {
                    event.preventDefault(); // Prevent the form from submitting
                    errorMessage.textContent = "Invalid email or password.";
                    errorMessage.style.transform = "translateY(-50px)"; // Translate the error message up
                }
            }
        }
    });
});
