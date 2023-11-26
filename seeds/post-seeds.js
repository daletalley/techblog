// Importing the Post model from '../models'
const { Post } = require('../models');

// Seed data for posts
const postData = [
  {
    title: "First Post",
    content: "This is the content of the first post.",
    user_id: 1
  },
  {
    title: "Second Post",
    content: "This is the content of the second post.",
    user_id: 2
  },
  // Add more seed data as needed
];

// Function to seed the posts into the database using bulkCreate method of the Post model
const seedPosts = () => Post.bulkCreate(postData);

// Exporting the seedPosts function to be used in other files
module.exports = seedPosts;
