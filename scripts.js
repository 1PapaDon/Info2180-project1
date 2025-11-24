/* Add your JavaScript to this file */
window.addEventListener('DOMContentLoaded', function() {
    // Get the form element
    const form = document.querySelector('.newsletter form');
    const emailInput = document.getElementById('email');
    const messageDiv = document.querySelector('.message');

    // Add submit event listener to the form
    form.addEventListener('submit', function(event) {
        // Prevent the default form submission
        event.preventDefault();
        
        // Get the email value and trim whitespace
        const email = emailInput.value.trim();
        
        // Check if email is empty or invalid
        if (email === '' || !isValidEmail(email)) {
            messageDiv.textContent = 'Please enter a valid email address.';
        } else {
            // Display success message with the email address
            messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;
            // Clear the input field
            emailInput.value = '';
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});