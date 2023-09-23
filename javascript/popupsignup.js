// script.js

// Get references to elements
const openPopupButton = document.getElementById('popup-signup');
const closePopupButton = document.getElementById('close-popup');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');

// Function to open the popup
function openPopup() {
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

// Event listeners
openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
overlay.addEventListener('click', closePopup);
