// smooth-scroll.js

// Function to smoothly scroll to a target element
function smoothScrollTo(target) {
    const element = document.querySelector(target);
    if (element) {
        window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop,
        });
    }
}

// Add an event listener to the "Services" link
const servicesLink = document.getElementById('services-link');
if (servicesLink) {
    servicesLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior

        // Call the smoothScrollTo function with the target section's ID
        smoothScrollTo('#services-section');
    });
}

// Add an event listener to the "Services" link
const footerLink = document.getElementById('footer-link');
if (footerLink) {
    footerLink.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior

        // Call the smoothScrollTo function with the target section's ID
        smoothScrollTo('#footer-id');
    });
}

