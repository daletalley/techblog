// Function to handle the login form submission
async function loginFormHandler(event) {
    event.preventDefault();

    // Get the values from the email and password input fields
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // Check if both email and password are provided
    if (email && password) {
        // Send a POST request to the login API endpoint
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // Check if the response is successful
        if (response.ok) {
            // Redirect the user to the dashboard page
            document.location.replace('/dashboard');
        } else {
            // Display an alert with the error message
            alert(response.statusText);
        }
    }
}

// Add an event listener to the login form submit button
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
