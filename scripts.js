document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Clear previous error message
    errorMessage.textContent = '';

    // Simple login validation
    if (username === 'user' && password === '12345678') {
        // Store login state
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'dashboard.html'; // Redirect to dashboard
    } else {
        errorMessage.textContent = 'Invalid username or password. Please try again.';
    }
});
