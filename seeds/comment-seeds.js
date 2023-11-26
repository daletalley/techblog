// Importing the Comment model
const { Comment } = require('../models');

// Array of comment data
const commentData = [
  {
    comment_text: "Great post!", // Comment text for the first comment
    user_id: 1, // User ID for the first comment
    post_id: 1 // Post ID for the first comment
  },
  {
    comment_text: "Very informative, thanks!", // Comment text for the second comment
    user_id: 2, // User ID for the second comment
    post_id: 2 // Post ID for the second comment
  },
  // Add more seed data as needed
];

// Function to seed comments
const seedComments = () => Comment.bulkCreate(commentData);

// Exporting the seedComments function
module.exports = seedComments;
