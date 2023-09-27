document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    const currentPageUrl = window.location.pathname;

    // Find the active link based on the current page URL and add a class
    if (currentPageUrl.includes("index.html")) {
        document.getElementById("home-link").classList.add("active");
    } else if (currentPageUrl.includes("aboutus.html")) {
        document.getElementById("about-link").classList.add("active");
    } else {
        // If the current page is neither "About us" nor "Home," make "Services" link active
        document.getElementById("services-link").classList.add("active");
    }
});