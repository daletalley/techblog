// Function to handle the comment form submission
async function commentFormHandler(event) {
    event.preventDefault();

    // Get the comment text from the textarea
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    
    // Get the post ID from the URL
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
    ];

    if (comment_text) {
        // Send a POST request to the server to create a new comment
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            // If the response is successful, reload the page to show the new comment
            document.location.reload();
        } else {
            // If the response is not successful, display an error message
            alert(response.statusText);
        }
    }
}

// Add an event listener to the comment form submit button
document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
