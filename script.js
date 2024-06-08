<!-- U54107257 -->
// Wait for the DOM to fully load before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the form element by its ID
    const form = document.getElementById('feedbackForm');

    // Get the div where feedback will be displayed
    const feedbackDisplay = document.getElementById('feedbackDisplay');

    // Add an event listener to handle form submission
    form.addEventListener('submit', function(event) {
        // Prevent default form submission (reload page)
        event.preventDefault();

        // Get the values entered by the user
        const name = document.getElementById('name').value.trim();
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value.trim();

        // Validate that all fields are filled out
        if (!name || !rating || !comments) {
            // If any field is empty, show an alert and return early
            alert('Please fill out all fields.');
            return;
        }

        // Create a new feedback entry
        const feedbackEntry = document.createElement('div');
        feedbackEntry.classList.add('feedback-entry');

           // Create and append a header element for the name
        const feedbackName = document.createElement('h3');
        feedbackName.textContent = `Name: ${name}`;
        feedbackEntry.appendChild(feedbackName);

        // Create and append a paragraph element for the rating
        const feedbackRating = document.createElement('p');
        feedbackRating.textContent = `Rating: ${rating}`;
        feedbackEntry.appendChild(feedbackRating);

        // Create and append a paragraph element for the comments
        const feedbackComments = document.createElement('p');
        feedbackComments.textContent = `Comments: ${comments}`;
        feedbackEntry.appendChild(feedbackComments);

        // Append the feedback entry to the display area
        feedbackDisplay.appendChild(feedbackEntry);

        // Clear the form fields after submission
        form.reset();
    });
});
