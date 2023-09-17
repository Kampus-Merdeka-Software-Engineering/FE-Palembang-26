document.addEventListener("DOMContentLoaded", function () {
    // This code runs when the DOM is fully loaded and ready to be manipulated.
    // It ensures that the JavaScript code is executed after the HTML has been parsed.
  
    // Initialize flatpickr date picker
    const dateInput = document.getElementById("selected-date-input");
    const calculateButton = document.getElementById("calculate-button");
    const estimatedDateContainer = document.getElementById("estimated-date-container");
  
    // Get references to HTML elements:
    // - 'dateInput' refers to the input field where the user selects a date.
    // - 'calculateButton' refers to the button that triggers the date calculation.
    // - 'estimatedDateContainer' refers to the container where the estimated date will be displayed.
  
    flatpickr(dateInput, {
      dateFormat: "d/m/Y", // You can customize the date format.
    });
  
    // Initialize flatpickr on 'dateInput' using a custom date format.
    // The 'flatpickr' library is used to create a date picker widget.
  
    calculateButton.addEventListener("click", function () {
      // Add a click event listener to the 'calculateButton' element.
  
      const selectedDate = flatpickr.parseDate(dateInput.value, "d/m/Y");
      // Parse the date input from the 'dateInput' field based on the specified format.
  
      if (selectedDate) {
        // Check if 'selectedDate' is a valid date (not null or undefined).
  
        // Calculate estimated date of birth (add 280 days to the selected date)
        const estimatedDateOfBirth = new Date(selectedDate);
        estimatedDateOfBirth.setDate(selectedDate.getDate() + 280);
  
        // Calculate the estimated date of birth by adding 280 days to the selected date.
        // The result is stored in 'estimatedDateOfBirth', which is a JavaScript Date object.
  
        // Display the estimated date of birth
        const formattedEstimatedDate = estimatedDateOfBirth.toLocaleDateString("en-US");
        estimatedDateContainer.textContent = `Estimated Date of Birth: ${formattedEstimatedDate}`;
        // Display the estimated date in the 'estimatedDateContainer' element.
  
      } else {
        // Handle invalid date input (optional)
        estimatedDateContainer.textContent = "Please select a valid date.";
        // Display a message in the 'estimatedDateContainer' if the selected date is invalid.
      }
    });
  });
  