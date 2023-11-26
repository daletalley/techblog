// Function to handle the logout process
async function logout() {
    // Send a POST request to the '/api/users/logout' endpoint
    const response = await fetch('/api/users/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    // If the response is successful (status code 200)
    if (response.ok) {
        // Redirect the user to the homepage
        document.location.replace('/');
    } else {
        // If the response is not successful, display an alert with the status text
        alert(response.statusText);
    }
}

// Attach the logout function to the click event of the element with the id 'logout'
document.querySelector('#logout').addEventListener('click', logout);
