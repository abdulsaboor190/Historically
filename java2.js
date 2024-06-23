function validateLogin() {
    // Dummy correct credentials
    const correctUsername = 'fast@isb.nu.edu.pk';
    const correctPassword = '1234';

    // Get input values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if entered credentials match the correct ones
    if (username === correctUsername && password === correctPassword) {
        // Redirect to Home.html
        window.location.href = 'Home.html';
    } else {
        // Display error message
        alert('Invalid username or password. Please try again.');
    }
}
