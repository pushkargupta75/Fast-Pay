document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const termsChecked = document.getElementById('terms').checked;
    const errorMessage = document.getElementById('error-message');

    // Validate inputs
    if (!name || !email || !password || !confirmPassword) {
        errorMessage.textContent = 'Please fill out all fields.';
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = 'Passwords do not match.';
        return;
    }

    if (!termsChecked) {
        errorMessage.textContent = 'You must agree to the Terms and Conditions.';
        return;
    }

    // If everything is correct
    errorMessage.textContent = '';
    alert('Signup successful!');
});