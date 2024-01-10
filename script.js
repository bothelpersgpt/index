// script.js

function updatePageAfterSignup() {
    // Check if the user is already logged in or on the home page
    if (sessionStorage.getItem("loggedIn") === "true" && window.location.pathname === "/home") {
        // User is already logged in and on the home page, no need to redirect or update
        return;
    }

    // Check if the user is already logged in and has not signed up
    if (sessionStorage.getItem("loggedIn") === "true" && window.location.pathname !== "/home") {
        // Redirect back to "/home" if the user manually removed it from the URL
        window.location.pathname = "/home";
        return;
    }

    // Create a central container div
    const container = document.getElementById("container");

    // Create a div for the home page content
    const homeContent = document.createElement("div");
    homeContent.id = "home-content";
    container.appendChild(homeContent);

    // Create a header for the home page
    const header = document.createElement("h2");
    header.textContent = "Welcome to the Home Page!";
    homeContent.appendChild(header);

    // Add a "Not Ready" message with better styling
    const notReadyMessage = document.createElement("p");
    notReadyMessage.textContent = "Not Ready";
    notReadyMessage.style.color = "#FF0000"; // Red color for emphasis
    homeContent.appendChild(notReadyMessage);

    // Redirect to "/home" using JavaScript only if the user signed up
    if (!sessionStorage.getItem("loggedIn")) {
        window.location.pathname = "/home";
    }
}
