function validateForm() {
    // Dummy correct credentials
    const correctEmail = 'fast@isb.nu.edu.pk';
    const correctPassword = '1234';

    // Get input values
    const email = document.getElementById('email-1').value;
    const password = document.getElementById('password').value;

    // Check if entered credentials match the correct ones
    if (email === correctEmail && password === correctPassword) {
        // Redirect to Home.html
        window.location.href = 'Home.html';
    } else {
        // Display error message
        alert('Invalid email or password. Please try again.');
    }
}
