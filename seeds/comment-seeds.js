const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Great post!",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: "Very informative, thanks!",
    user_id: 2,
    post_id: 2
  },
  // Add more seed data as needed
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
