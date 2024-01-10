// script.js

function createAccount() {
    // Perform account creation logic here
    // (You may want to send a request to a server for account creation)
    // For simplicity, let's just show the home page after account creation

    // Save login state
    saveLoginState();

    // Update styles and content
    updatePageAfterSignup();
}

function saveLoginState() {
    // You can implement a more robust solution, such as using cookies or localStorage,
    // to persist the login state across page reloads.
    sessionStorage.setItem("loggedIn", "true");
}

function updatePageAfterSignup() {
    // Check if the user is already on the home page
    if (window.location.pathname === "/home") {
        // User is already on the home page, update content if signed up
        updateHomeContent();
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

    // Redirect to "/home" using JavaScript
    window.location.pathname = "/home";
}

function updateHomeContent() {
    // Check if the user is signed in
    if (sessionStorage.getItem("loggedIn") === "true") {
        // Create a central container div
        const container = document.getElementById("container");

        // Create a div for the home page content
        const homeContent = document.createElement("div");
        homeContent.id = "home-content";
        container.appendChild(homeContent);

        // Create a header for the home page
        const header = document.createElement("h2");
        header.textContent = "Welcome to Iready-Exploit!";
        homeContent.appendChild(header);

        // Add a "Not Ready" message with better styling
        const notReadyMessage = document.createElement("p");
        notReadyMessage.textContent = "Not Ready Iready-Exploit Isn't Ready";
        notReadyMessage.style.color = "#FF0000"; // Red color for emphasis
        homeContent.appendChild(notReadyMessage);
    }
}

// Check if the user is already logged in
window.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem("loggedIn") === "true") {
        // User is already logged in, show the home page
        updateHomeContent();
    } else {
        // User is not logged in, show the signup form
        const container = document.getElementById("container");

        // Create a div for the signup form
        const signupForm = document.createElement("div");
        signupForm.id = "signup-form";
        container.appendChild(signupForm);

        // Create a header for the signup form
        const signupHeader = document.createElement("h2");
        signupHeader.textContent = "Create an Account";
        signupForm.appendChild(signupHeader);

        // Create the email input
        const emailLabel = document.createElement("label");
        emailLabel.textContent = "Email:";
        signupForm.appendChild(emailLabel);

        const emailInput = document.createElement("input");
        emailInput.type = "email";
        emailInput.id = "email";
        emailInput.required = true;
        signupForm.appendChild(emailInput);

        // Create the password input
        const passwordLabel = document.createElement("label");
        passwordLabel.textContent = "Password:";
        signupForm.appendChild(passwordLabel);

        const passwordInput = document.createElement("input");
        passwordInput.type = "password";
        passwordInput.id = "password";
        passwordInput.required = true;
        signupForm.appendChild(passwordInput);

        // Create the signup button
        const signupButton = document.createElement("button");
        signupButton.textContent = "Create Account";
        signupButton.addEventListener("click", createAccount);
        signupForm.appendChild(signupButton);
    }
});
